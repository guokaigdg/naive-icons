#!/usr/bin/env python3
"""
naive-icons 语义检索 —— 从自然语言描述找出最贴切的图标。

只用标准库，可独立于仓库运行（索引数据内嵌在本文件里）。

    python3 search.py "登录页要个锁"
    python3 search.py "loading spinner" --limit 3
    python3 search.py "邮件" --category communication
    python3 search.py --list-categories

设计要点：命中判定用「子串包含」而非分词，因为中文没有空格，
且 agent 传来的往往是完整句子而非关键词。权重让精确 id 命中压过泛化同义词。
"""
import argparse
import re
import sys
from collections import defaultdict

# ── 调色板与规格（写入输出避免 agent 再去翻设计文档）────────────────────
PALETTE = {
    'ink': '#2A2A2A', 'navy': '#264653', 'orange': '#E76F51',
    'yellow': '#E9C46A', 'pink': '#F4A6A4', 'green': '#588157',
    'teal': '#2A9D8F', 'brown': '#8B5E3C', 'cream': '#FAEDCD',
}

# ── 分类 ──────────────────────────────────────────────────────────────
CATEGORIES = {
    'interface': '界面基础', 'action': '操作', 'media': '文件与媒体',
    'navigation': '导航方位', 'communication': '通信', 'nature': '自然天气',
    'animals': '动物', 'food': '食物饮品', 'objects': '日常物品',
    'transport': '交通工具', 'emoji': '表情',
}

# ── 163 枚图标：id -> (中文名, 分类) ──────────────────────────────────
ICONS = {
    'airplane': ('飞机', 'transport'), 'alert-circle': ('提示', 'interface'),
    'alert-triangle': ('警告', 'interface'), 'anchor': ('锚', 'navigation'),
    'apple': ('苹果', 'food'), 'arrow-down': ('下', 'navigation'),
    'arrow-left': ('左', 'navigation'), 'arrow-right': ('右', 'navigation'),
    'arrow-up': ('上', 'navigation'), 'arrow-up-right': ('右上箭头', 'navigation'),
    'badge-check': ('认证', 'interface'), 'balloon': ('气球', 'objects'),
    'ban': ('禁止', 'interface'), 'basketball': ('篮球', 'objects'),
    'bear': ('小熊', 'animals'), 'bee': ('蜜蜂', 'animals'),
    'bell': ('铃铛', 'interface'), 'bell-off': ('免打扰', 'interface'),
    'bicycle': ('自行车', 'transport'), 'bird': ('小鸟', 'animals'),
    'book': ('书本', 'media'), 'bookmark': ('书签', 'interface'),
    'bulb': ('灯泡', 'interface'), 'butterfly': ('蝴蝶', 'animals'),
    'cactus': ('仙人掌', 'nature'), 'cake': ('蛋糕', 'food'),
    'calendar': ('日历', 'interface'), 'camera': ('相机', 'media'),
    'candle': ('蜡烛', 'objects'), 'car': ('汽车', 'transport'),
    'cart': ('购物车', 'objects'), 'charger': ('充电头', 'objects'),
    'cat': ('小猫', 'animals'),
    'chat': ('对话', 'communication'), 'check': ('勾选', 'action'),
    'check-circle': ('成功', 'interface'), 'check-square': ('复选框', 'interface'),
    'cherry': ('樱桃', 'food'), 'chevron-down': ('向下', 'navigation'),
    'chevron-left': ('向左', 'navigation'), 'chevron-right': ('向右', 'navigation'),
    'chevron-up': ('向上', 'navigation'), 'clock': ('时钟', 'interface'),
    'close': ('关闭', 'action'), 'cloud': ('云朵', 'nature'),
    'code': ('代码', 'media'), 'coffee': ('咖啡', 'food'),
    'coffee-cup': ('咖啡杯', 'food'), 'compass': ('指南针', 'navigation'),
    'copy': ('复制', 'action'), 'credit-card': ('信用卡', 'objects'),
    'dog': ('小狗', 'animals'), 'donut': ('甜甜圈', 'food'),
    'download': ('下载', 'action'), 'dumbbell': ('哑铃', 'objects'),
    'edit': ('编辑', 'action'), 'ellipsis': ('更多', 'interface'),
    'external-link': ('外链', 'interface'), 'eye': ('眼睛', 'interface'),
    'eye-off': ('隐藏', 'interface'), 'file': ('文件', 'media'),
    'filter': ('筛选', 'action'), 'fish': ('小鱼', 'animals'),
    'flag': ('旗帜', 'navigation'), 'flame': ('火焰', 'nature'),
    'flower': ('花朵', 'nature'), 'folder': ('文件夹', 'media'),
    'fox': ('狐狸', 'animals'), 'frog': ('青蛙', 'animals'),
    'gift': ('礼物', 'objects'), 'globe': ('地球仪', 'objects'),
    'google-chrome': ('Chrome', 'objects'), 'grid': ('网格', 'interface'),
    'headphones': ('耳机', 'media'), 'heart': ('爱心', 'interface'),
    'help-circle': ('帮助', 'interface'), 'home': ('家', 'interface'),
    'icecream': ('冰淇淋', 'food'), 'image': ('图片', 'media'),
    'inbox': ('收件箱', 'communication'), 'info': ('信息', 'interface'),
    'key': ('钥匙', 'objects'), 'keyboard': ('键盘', 'objects'),
    'ladybug': ('瓢虫', 'animals'),
    'lamp': ('台灯', 'objects'), 'leaf': ('叶子', 'nature'),
    'lemon': ('柠檬', 'food'), 'link': ('链接', 'interface'),
    'list': ('列表', 'interface'), 'location': ('定位', 'navigation'),
    'lock': ('锁', 'objects'), 'lock-open': ('解锁', 'objects'),
    'magnet': ('磁铁', 'navigation'), 'mail': ('邮件', 'communication'),
    'map': ('地图', 'navigation'), 'maximize': ('全屏', 'action'),
    'menu': ('菜单', 'interface'), 'mic': ('麦克风', 'media'),
    'minus': ('减号', 'action'), 'monitor': ('显示器', 'objects'),
    'moon': ('月亮', 'nature'),
    'more-vertical': ('更多(竖)', 'interface'), 'mountain': ('山峰', 'nature'),
    'mushroom': ('蘑菇', 'nature'), 'mouse': ('鼠标', 'objects'),
    'music': ('音乐', 'media'),
    'owl': ('猫头鹰', 'animals'), 'paintbrush': ('画笔', 'objects'),
    'paperclip': ('附件', 'media'), 'pause': ('暂停', 'action'),
    'pencil': ('铅笔', 'objects'), 'penguin': ('企鹅', 'animals'),
    'phone': ('电话', 'communication'), 'play': ('播放', 'action'),
    'plus': ('加号', 'action'), 'rabbit': ('兔子', 'animals'),
    'rainbow': ('彩虹', 'nature'), 'redo': ('重做', 'action'),
    'refresh': ('刷新', 'action'), 'rocket': ('火箭', 'transport'),
    'sailboat': ('帆船', 'transport'), 'save': ('保存', 'action'),
    'scooter': ('踏板摩托车', 'transport'), 'search': ('搜索', 'interface'),
    'send': ('发送', 'communication'), 'settings': ('设置', 'interface'),
    'share': ('分享', 'action'), 'shield': ('安全', 'interface'),
    'shopping-bag': ('购物袋', 'objects'), 'sliders': ('调节', 'interface'),
    'smile': ('微笑', 'emoji'), 'snail': ('蜗牛', 'animals'),
    'snowflake': ('雪花', 'nature'), 'sort': ('排序', 'action'),
    'spinner': ('加载', 'interface'), 'star': ('星星', 'interface'),
    'stop': ('停止', 'action'), 'strawberry': ('草莓', 'food'),
    'sun': ('太阳', 'nature'), 'tag': ('标签', 'interface'),
    'tent': ('帐篷', 'nature'), 'thermometer': ('温度计', 'objects'),
    'thumbs-up': ('点赞', 'emoji'), 'train': ('火车', 'transport'),
    'trash': ('垃圾桶', 'action'), 'tree': ('大树', 'nature'),
    'trophy': ('奖杯', 'objects'), 'umbrella': ('雨伞', 'nature'),
    'undo': ('撤销', 'action'), 'unlink': ('取消链接', 'interface'),
    'upload': ('上传', 'action'), 'user': ('用户', 'interface'),
    'user-plus': ('添加成员', 'interface'), 'users': ('多人', 'interface'),
    'video': ('视频', 'media'), 'volume': ('音量', 'media'),
    'volume-x': ('静音', 'media'), 'water-cup': ('水杯', 'food'),
    'watermelon': ('西瓜', 'food'), 'wifi': ('无线网', 'communication'),
    'x-circle': ('错误', 'interface'), 'zoom-in': ('放大', 'action'),
    'zoom-out': ('缩小', 'action'),
}

# ── 同义词 / 意图映射：关键词 -> 候选图标 ──────────────────────────────
# 按 UI 意图组织，而不是按字母表。左边可写中文、英文或常见缩写，
# 检索时用子串包含匹配，越长的关键词权重越高。
SYNONYMS = {
    # 账号与身份
    '登录': ['lock', 'key', 'user', 'shield'], '登陆': ['lock', 'key'],
    'login': ['lock', 'key', 'user', 'shield'], 'signin': ['lock', 'key', 'user'],
    '注册': ['user-plus', 'key'], 'register': ['user-plus', 'key'],
    'signup': ['user-plus', 'key'],
    '账户': ['user', 'users'], '帐号': ['user', 'users'], '账号': ['user', 'users'],
    'account': ['user', 'users'],
    '用户': ['user', 'users'], '成员': ['users', 'user-plus'], 'user': ['user'],
    '团队': ['users', 'user-plus'], 'team': ['users', 'user-plus'],
    '邀请': ['user-plus'], 'invite': ['user-plus'], '加好友': ['user-plus'],
    '添加成员': ['user-plus'], 'userplus': ['user-plus'],
    '权限': ['shield', 'key', 'lock'], 'permission': ['shield', 'key'],
    '管理员': ['settings', 'shield'], 'admin': ['settings', 'shield'],
    '隐私': ['shield', 'lock', 'eye-off'], '安全': ['shield', 'lock'],
    '认证': ['badge-check', 'shield', 'key'], '验证': ['badge-check', 'check-circle'],
    '实名': ['badge-check'], 'verify': ['badge-check', 'check-circle'],
    'password': ['lock', 'key'], '密码': ['lock', 'key'],
    # 通用操作
    '新增': ['plus', 'user-plus'], '添加': ['plus', 'user-plus'], 'add': ['plus', 'user-plus'],
    '减': ['minus'], 'minus': ['minus'],
    '删除': ['trash', 'close'], '垃圾桶': ['trash'], 'delete': ['trash'],
    'remove': ['trash', 'close'], '清理': ['trash'],
    '编辑': ['edit', 'pencil'], '修改': ['edit', 'pencil'], 'edit': ['edit', 'pencil'],
    '新建': ['edit', 'pencil', 'plus'], 'create': ['edit', 'pencil', 'plus'],
    '撰写': ['edit', 'pencil'], 'write': ['pencil', 'edit'],
    '保存': ['save'], 'save': ['save'], '存': ['save'],
    '下载': ['download', 'save'], '导出': ['download'], 'download': ['download'],
    '上传': ['upload'], '导入': ['upload'], 'upload': ['upload'],
    '复制': ['copy'], '拷贝': ['copy'], 'copy': ['copy'], 'duplicate': ['copy'],
    '搜索': ['search'], '查找': ['search'], 'search': ['search'],
    '筛选': ['filter'], '过滤': ['filter'], 'filter': ['filter'],
    '排序': ['sort'], 'sort': ['sort'],
    '刷新': ['refresh'], '重新加载': ['refresh'], 'refresh': ['refresh'],
    '同步': ['refresh'], 'reload': ['refresh'],
    '撤销': ['undo'], '回退': ['undo'], 'undo': ['undo'],
    '重做': ['redo'], 'redo': ['redo'],
    '全屏': ['maximize'], '最大化': ['maximize'], 'fullscreen': ['maximize'],
    'maximize': ['maximize'],
    '放大': ['zoom-in'], 'zoomin': ['zoom-in'], '放大镜': ['search', 'zoom-in'],
    '缩小': ['zoom-out'], 'zoomout': ['zoom-out'],
    '展开': ['chevron-down', 'maximize'], '收起': ['chevron-up'],
    '更多': ['ellipsis', 'more-vertical'], 'more': ['ellipsis', 'more-vertical'],
    '竖排': ['more-vertical'], 'kebab': ['more-vertical'],
    '发送': ['send'], '发出': ['send'], '提交': ['send'], 'send': ['send'],
    '分享': ['share', 'send'], '转发': ['share'], 'share': ['share'],
    '回复': ['chat', 'send'], 'reply': ['chat', 'send'],
    '链接': ['link', 'external-link'], '网址': ['link'], 'link': ['link'],
    '取消链接': ['unlink'], '断开': ['unlink'], 'unlink': ['unlink'],
    '外链': ['external-link'], '站外': ['external-link'], '新窗口': ['external-link'],
    'externallink': ['external-link'],
    '附件': ['paperclip'], 'attach': ['paperclip'], 'paperclip': ['paperclip'],
    '播放': ['play'], 'play': ['play'], '暂停': ['pause'], 'pause': ['pause'],
    '停止': ['stop'], 'stop': ['stop'],
    '下一个': ['chevron-right', 'play'], 'prev': ['chevron-left', 'play'],
    '关闭': ['close', 'x-circle'], '关掉': ['close'], 'close': ['close'],
    '取消': ['close', 'x-circle'], 'cancel': ['close', 'x-circle'],
    '退出': ['close', 'external-link'],
    '确认': ['check', 'check-circle'], '确定': ['check', 'check-circle'],
    '完成': ['check', 'check-circle'], 'ok': ['check', 'check-circle'],
    '成功': ['check-circle'], 'success': ['check-circle'],
    '错误': ['x-circle', 'alert-circle'], '失败': ['x-circle'], 'error': ['x-circle'],
    '警告': ['alert-triangle'], '危险': ['alert-triangle'], 'warning': ['alert-triangle'],
    '警报': ['alert-circle', 'bell'], 'alert': ['alert-circle', 'bell'],
    '信息': ['info'], '详情': ['info'], '说明': ['info'], 'info': ['info'],
    '帮助': ['help-circle'], '问号': ['help-circle'], '客服': ['help-circle'],
    '答疑': ['help-circle'], 'help': ['help-circle'], 'question': ['help-circle'],
    '加载': ['spinner'], '等待': ['spinner'], '转圈': ['spinner'],
    'loading': ['spinner'], 'spinner': ['spinner'],
    '设置': ['settings'], '配置': ['settings'], '齿轮': ['settings'],
    '偏好': ['settings'], 'settings': ['settings'], 'config': ['settings'],
    '调节': ['sliders'], '微调': ['sliders'], '参数': ['sliders'],
    'tune': ['sliders'], 'adjust': ['sliders'],
    '视图': ['grid', 'list'], '展示方式': ['grid', 'list'],
    '网格': ['grid'], '宫格': ['grid'], '看板': ['grid'], 'grid': ['grid'],
    '列表': ['list'], '清单': ['list'], 'list': ['list'],
    '标签': ['tag'], '标记': ['tag'], 'tag': ['tag'],
    '书签': ['bookmark'], '收藏夹': ['bookmark'], 'bookmark': ['bookmark'],
    '收藏': ['star', 'bookmark'], 'favorite': ['star', 'bookmark'],
    '评分': ['star'], '五星': ['star'], 'star': ['star'],
    '爱心': ['heart'], '喜欢': ['heart', 'thumbs-up'], 'heart': ['heart'],
    '点赞': ['thumbs-up', 'heart'], 'like': ['thumbs-up', 'heart'],
    '禁止': ['ban'], '屏蔽': ['ban'], 'ban': ['ban'],
    '免打扰': ['bell-off'], '静音提醒': ['bell-off'], 'belloff': ['bell-off'],
    '通知': ['bell'], '提醒': ['bell', 'alert-circle'], '铃铛': ['bell'], 'bell': ['bell'],
    '复选框': ['check-square'], '多选': ['check-square'], 'checkbox': ['check-square'],
    '勾选': ['check'], '打勾': ['check'], 'check': ['check'],
    '拖拽': ['menu', 'grid'], '把手': ['menu'],
    # 文件与媒体
    '文件': ['file'], '文档': ['file', 'book'], 'file': ['file'],
    '文件夹': ['folder'], '目录': ['folder'], 'folder': ['folder'],
    '图片': ['image'], '照片': ['image', 'camera'], '图像': ['image'], 'image': ['image'],
    '相机': ['camera'], '拍照': ['camera'], 'camera': ['camera'], 'photo': ['camera'],
    '视频': ['video'], '影片': ['video'], 'video': ['video'],
    '音乐': ['music'], '歌曲': ['music'], 'music': ['music'],
    '音频': ['mic', 'music'], 'audio': ['mic', 'music'], 'sound': ['volume', 'volume-x'],
    '麦克风': ['mic'], '录音': ['mic'], '语音': ['mic'], 'mic': ['mic'],
    '音量': ['volume'], '声音大小': ['volume'], 'volume': ['volume'],
    '无声': ['volume-x'], '闭音': ['volume-x'], 'mute': ['volume-x'],
    '耳机': ['headphones'], 'headphones': ['headphones'],
    '代码': ['code'], '开发': ['code'], '编程': ['code'], '源码': ['code'], 'code': ['code'],
    '书本': ['book'], '阅读': ['book'], 'book': ['book'],
    # 通信
    '邮件': ['mail'], '邮箱': ['mail'], '信封': ['mail'], 'mail': ['mail'],
    'email': ['mail'], '收件箱': ['inbox'], '未读': ['inbox'], 'inbox': ['inbox'],
    '对话': ['chat'], '聊天': ['chat'], '消息': ['chat'], '私信': ['chat'],
    'chat': ['chat'], 'message': ['chat'],
    '电话': ['phone'], '拨号': ['phone'], '通话': ['phone'], 'phone': ['phone'],
    'call': ['phone'], '无线': ['wifi'], '网络': ['wifi'], 'wifi': ['wifi'],
    'network': ['wifi'], '联系人': ['user', 'users'], 'contact': ['user', 'users'],
    # 导航方位
    '家': ['home'], '首页': ['home'], 'home': ['home'],
    '菜单': ['menu'], '汉堡': ['menu'], 'menu': ['menu'],
    '返回': ['arrow-left', 'chevron-left'], '后退': ['arrow-left'],
    'back': ['arrow-left', 'chevron-left'],
    '前进': ['arrow-right', 'chevron-right'], 'forward': ['arrow-right', 'chevron-right'],
    '上': ['arrow-up', 'chevron-up'], '向上': ['arrow-up', 'chevron-up'], 'up': ['arrow-up', 'chevron-up'],
    '下': ['arrow-down', 'chevron-down'], '向下': ['arrow-down', 'chevron-down'], 'down': ['arrow-down', 'chevron-down'],
    '左': ['arrow-left', 'chevron-left'], 'left': ['arrow-left', 'chevron-left'],
    '右': ['arrow-right', 'chevron-right'], 'right': ['arrow-right', 'chevron-right'],
    '右上': ['arrow-up-right'], '定位': ['location'], '位置': ['location'],
    '地点': ['location'], 'gps': ['location'], 'location': ['location'],
    '地图': ['map'], 'map': ['map'], '指南针': ['compass'], '方向': ['compass'],
    'compass': ['compass'], '锚': ['anchor'], 'anchor': ['anchor'],
    '旗帜': ['flag'], 'flag': ['flag'], '箭头': ['arrow-up', 'arrow-down', 'arrow-left', 'arrow-right'],
    'arrow': ['arrow-up', 'arrow-down', 'arrow-left', 'arrow-right'],
    # 日常物品
    '钥匙': ['key'], '密钥': ['key'], 'key': ['key'],
    '锁': ['lock'], '锁定': ['lock'], 'lock': ['lock'],
    '解锁': ['lock-open'], 'unlock': ['lock-open'],
    '礼物': ['gift'], '礼品': ['gift'], '送礼': ['gift'], 'gift': ['gift'],
    '购物车': ['cart'], '加购': ['cart'], '购物篮': ['cart'], 'cart': ['cart'],
    '购物': ['cart', 'shopping-bag'], '商城': ['cart', 'shopping-bag'],
    'shopping': ['cart', 'shopping-bag'], '购物袋': ['shopping-bag'], 'bag': ['shopping-bag'],
    '支付': ['credit-card'], '付款': ['credit-card'], '收银': ['credit-card'],
    '结算': ['credit-card'], 'pay': ['credit-card'], '卡': ['credit-card'],
    '信用卡': ['credit-card'], '银行卡': ['credit-card'], 'card': ['credit-card'],
    '灵感': ['bulb'], '创意': ['bulb'], '想法': ['bulb'], 'idea': ['bulb'],
    '灯泡': ['bulb'], 'bulb': ['bulb'],
    '画笔': ['paintbrush'], '绘画': ['paintbrush', 'pencil'], '涂鸦': ['paintbrush'],
    'paint': ['paintbrush', 'pencil'], 'paintbrush': ['paintbrush'],
    '铅笔': ['pencil'], 'pencil': ['pencil'],
    '台灯': ['lamp'], '灯': ['lamp', 'bulb'], 'lamp': ['lamp'],
    '蜡烛': ['candle'], 'candle': ['candle'],
    '奖杯': ['trophy'], '冠军': ['trophy'], '获奖': ['trophy'], 'trophy': ['trophy'],
    '磁铁': ['magnet'], 'magnet': ['magnet'],
    '地球': ['globe'], '全球': ['globe'], '国际': ['globe'], '语言': ['globe'],
    'globe': ['globe'], '浏览器': ['google-chrome'], 'chrome': ['google-chrome'],
    '温度': ['thermometer'], '气温': ['thermometer'], 'thermometer': ['thermometer'],
    '气球': ['balloon'], 'balloon': ['balloon'],
    '健身': ['dumbbell'], '运动': ['dumbbell'], '举铁': ['dumbbell'], 'dumbbell': ['dumbbell'],
    # 外设
    '键盘': ['keyboard'], '键鼠': ['keyboard', 'mouse'], '快捷键': ['keyboard'],
    '打字': ['keyboard'], '输入设备': ['keyboard'], 'keyboard': ['keyboard'],
    '鼠标': ['mouse'], '点击': ['mouse'], '指针': ['mouse', 'location'],
    '滚轮': ['mouse'], '点击设备': ['mouse'], 'mouse': ['mouse'],
    '显示器': ['monitor'], '屏幕': ['monitor'], '大屏': ['monitor'],
    '副屏': ['monitor'], '显示设备': ['monitor'], 'monitor': ['monitor'], 'screen': ['monitor'],
    '充电头': ['charger'], '充电器': ['charger'], '插头': ['charger'],
    '电源适配器': ['charger'], '快充': ['charger'], '充电': ['charger'], 'charger': ['charger'],
    # 自然天气
    '太阳': ['sun'], '晴天': ['sun'], '白天': ['sun'], 'sun': ['sun'],
    '云': ['cloud'], '多云': ['cloud'], 'cloud': ['cloud'],
    '月亮': ['moon'], '夜晚': ['moon'], '深夜': ['moon'], 'moon': ['moon'],
    '下雨': ['umbrella', 'cloud'], '雨': ['umbrella'], 'rain': ['umbrella', 'cloud'],
    '雨伞': ['umbrella'], 'umbrella': ['umbrella'],
    '下雪': ['snowflake'], '雪': ['snowflake'], '冬天': ['snowflake'],
    'snow': ['snowflake'], 'snowflake': ['snowflake'],
    '彩虹': ['rainbow'], 'rainbow': ['rainbow'],
    '树': ['tree'], '森林': ['tree'], '自然': ['tree', 'leaf'], 'tree': ['tree'],
    '叶子': ['leaf'], '环保': ['leaf'], '绿色': ['leaf'], 'leaf': ['leaf'],
    '花': ['flower'], '花朵': ['flower'], '鲜花': ['flower'], 'flower': ['flower'],
    '山': ['mountain'], '山峰': ['mountain'], '爬山': ['mountain'], 'mountain': ['mountain'],
    '帐篷': ['tent'], '露营': ['tent'], '户外': ['tent'], 'tent': ['tent'],
    '火焰': ['flame'], '火': ['flame'], '热': ['flame'], 'flame': ['flame'], 'fire': ['flame'],
    # 动物
    '猫': ['cat'], 'cat': ['cat'], '狗': ['dog'], 'dog': ['dog'],
    '宠物': ['cat', 'dog'], 'pet': ['cat', 'dog'],
    '熊': ['bear'], 'bear': ['bear'], '鸟': ['bird'], 'bird': ['bird'],
    '蜜蜂': ['bee'], 'bee': ['bee'], '蝴蝶': ['butterfly'], 'butterfly': ['butterfly'],
    '鱼': ['fish'], 'fish': ['fish'], '狐狸': ['fox'], 'fox': ['fox'],
    '青蛙': ['frog'], 'frog': ['frog'], '瓢虫': ['ladybug'], 'ladybug': ['ladybug'],
    '猫头鹰': ['owl'], 'owl': ['owl'], '企鹅': ['penguin'], 'penguin': ['penguin'],
    '兔子': ['rabbit'], 'rabbit': ['rabbit'], '蜗牛': ['snail'], 'snail': ['snail'],
    '仙人掌': ['cactus'], 'cactus': ['cactus'], '蘑菇': ['mushroom'], 'mushroom': ['mushroom'],
    '篮球': ['basketball'], 'hoops': ['basketball'], '投篮': ['basketball'],
    'ball': ['basketball'],
    '日历': ['calendar'], 'schedule': ['calendar'], 'agenda': ['calendar'],
    '日程': ['calendar'], '预约': ['calendar'], 'events': ['calendar'],
    '隐藏': ['eye-off'], '隐身': ['eye-off'], 'password': ['eye', 'eye-off'],
    # 食物饮品
    '食物': ['cake', 'donut', 'apple'], '吃': ['cake', 'donut', 'apple'], 'food': ['cake', 'donut'],
    '咖啡': ['coffee', 'coffee-cup'], 'coffee': ['coffee', 'coffee-cup'],
    '杯子': ['water-cup'], '水': ['water-cup'], '喝水': ['water-cup'], 'water': ['water-cup'],
    '苹果': ['apple'], 'apple': ['apple'], '蛋糕': ['cake'], 'cake': ['cake'],
    '甜甜圈': ['donut'], 'donut': ['donut'], '樱桃': ['cherry'], 'cherry': ['cherry'],
    '草莓': ['strawberry'], 'strawberry': ['strawberry'], '柠檬': ['lemon'], 'lemon': ['lemon'],
    '西瓜': ['watermelon'], 'watermelon': ['watermelon'],
    '冰淇淋': ['icecream'], '甜品': ['icecream'], 'icecream': ['icecream'],
    # 交通工具
    '汽车': ['car'], '车': ['car'], '开车': ['car'], 'car': ['car'],
    '自行车': ['bicycle'], '单车': ['bicycle'], 'bicycle': ['bicycle'], 'bike': ['bicycle'],
    '踏板车': ['scooter'], '电动车': ['scooter'], '滑板车': ['scooter'], 'scooter': ['scooter'],
    '火车': ['train'], '地铁': ['train'], '列车': ['train'], 'train': ['train'],
    '飞机': ['airplane'], '航班': ['airplane'], '飞行': ['airplane'], 'plane': ['airplane'],
    'airplane': ['airplane'],
    '火箭': ['rocket'], '发射': ['rocket'], '太空': ['rocket'], 'rocket': ['rocket'],
    '帆船': ['sailboat'], '船': ['sailboat'], 'ship': ['sailboat'], 'sailboat': ['sailboat'],
    '旅行': ['airplane', 'map'], '出行': ['airplane', 'map'], 'travel': ['airplane', 'map'],
    # 表情
    '微笑': ['smile'], '笑': ['smile'], 'smile': ['smile'],
    '表情': ['smile', 'thumbs-up'], 'emoji': ['smile', 'thumbs-up'],
    # 跨分类概念词：库内没有同名图标，但用户会这么问
    '天气': ['sun', 'cloud', 'moon', 'snowflake', 'umbrella', 'rainbow'],
    'weather': ['sun', 'cloud', 'moon', 'snowflake', 'umbrella'],
    '加载中': ['spinner'], '请稍候': ['spinner'], '转圈圈': ['spinner'],
    '更多操作': ['ellipsis', 'more-vertical'], '操作菜单': ['more-vertical'],
    '主题': ['sun', 'moon'], '深色模式': ['moon'], '浅色模式': ['sun'],
    '主题切换': ['sun', 'moon'], '暗色': ['moon'], '亮色': ['sun'],
    '无障碍': ['eye', 'info'], '可访问性': ['eye'],
    '个人中心': ['user'], '我的': ['user'], 'workspace': ['grid'],
    '工作区': ['grid'], '面板': ['grid'], '总览': ['grid', 'home'],
    '仪表盘': ['grid', 'home'], 'dashboard': ['grid', 'home'],
    '折叠': ['chevron-up'], '选中': ['check'], '未选中': ['check-square'],
    '新建标签': ['plus', 'tag'], '标签页': ['tag', 'copy'],
    '稍后': ['clock'], '历史': ['clock', 'refresh'], '最近': ['clock'],
    '完成度': ['check-circle'], '进度': ['spinner', 'check-circle'],
    '成本': ['credit-card'], '价格': ['credit-card', 'tag'], '免费': ['gift'],
    '推荐': ['star', 'trophy'], '热门': ['flame'], '新品': ['gift', 'star'],
    '趋势': ['arrow-up-right'], '上升': ['arrow-up'], '下降': ['arrow-down'],
}

# ── 检索 ──────────────────────────────────────────────────────────────
W_EXACT_ID = 100      # 查询里直接出现完整 id
W_ID_PART = 55        # id 的分段（如 zoom-in 拆成 zoom / in）
W_SYN_EXACT = 70      # 同义词精确等于某个词
W_SYN_LONG = 40       # 长同义词命中（>=3 字，意图更明确）
W_SYN_SHORT = 22      # 短同义词命中（如「上」「下」歧义大）
W_ZH = 50             # 中文名命中
W_CAT = 15            # 分类名命中
W_POS_EARLY = 9       # 关键词出现在查询前段
W_POS_MID = 4         # 出现在中段

# 查询里纯功能性的噪声词，不参与匹配。
# 中文是单字无词界，直接子串替换。
# 英文必须走词边界正则——否则 'i' 会把 loading 打成 load n g，'in' 会把 inbox 打成 box。
# 注意：「用」「上」「下」不能进停用词，它们会误伤「用户」「上箭头」「下载」。
STOPWORDS_ZH = {
    '的', '了', '和', '与', '或', '是', '在', '我', '要', '想', '需要', '一个',
    '这个', '那个', '图标',
}
STOPWORDS_EN = re.compile(
    r'\b(?:the|a|an|for|to|of|and|or|in|is|i|want|need|please|give|me|icon|icons)\b')


def component_name(icon_id):
    """users -> UsersIcon，和 src/types.ts 的 IconName 保持一致。"""
    return ''.join(p.capitalize() for p in icon_id.split('-')) + 'Icon'


def search(query, limit=5, category=None):
    q = query.lower().strip()
    for w in STOPWORDS_ZH:
        q = q.replace(w, ' ')
    q = STOPWORDS_EN.sub(' ', q)

    scores = defaultdict(float)
    why = defaultdict(list)

    def add(icon_id, score, reason):
        if icon_id not in ICONS:
            return
        if category and ICONS[icon_id][1] != category:
            return
        scores[icon_id] += score
        why[icon_id].append(reason)

    # 1) 完整 id 命中。必须走词边界，否则 "profile" 里的 "file" 会误命中。
    for icon_id in ICONS:
        if re.search(r'(?<![a-z0-9])' + re.escape(icon_id) + r'(?![a-z0-9])', q):
            add(icon_id, W_EXACT_ID, icon_id)
    # 2) id 分段命中
    for icon_id in ICONS:
        for part in icon_id.split('-'):
            if len(part) >= 3 and re.search(
                    r'(?<![a-z0-9])' + re.escape(part) + r'(?![a-z0-9])', q):
                add(icon_id, W_ID_PART, part)
    # 3) 同义词命中。中文二字词（登录/下载/删除）意图已足够明确，
    #    不该和「上」「下」这种单字同级；英文则要求 3 字符以上才算明确。
    matched_kw = set()
    for kw, targets in SYNONYMS.items():
        at = q.find(kw)
        if at < 0:
            continue
        matched_kw.add(kw)
        if q.strip() == kw:
            w = W_SYN_EXACT
        elif len(kw) == 1:
            w = W_SYN_SHORT
        elif kw.isascii():
            w = W_SYN_LONG if len(kw) >= 3 else W_SYN_SHORT
        else:
            w = W_SYN_LONG
        # 位置权重：中文短句习惯「动作在前、宾语在后」，
        # 「删除文件」应判给 删除(trash) 而不是 文件(file)。
        w += W_POS_EARLY if at < len(q) * 0.34 else (W_POS_MID if at < len(q) * 0.67 else 0)
        for t in targets:
            add(t, w, kw)
    # 4) 中文名命中。若该中文名本身已被当作同义词计过分，就不再叠加——
    #    否则「删除文件」里的「文件」会同时拿到同义词分和中文名分，压过「删除」。
    for icon_id, (zh, _) in ICONS.items():
        if zh in matched_kw:
            continue
        if zh.lower() in q:
            add(icon_id, W_ZH, zh)
    # 5) 分类名命中
    for key, label in CATEGORIES.items():
        if key in q or label in q:
            for icon_id, (_, c) in ICONS.items():
                if c == key:
                    add(icon_id, W_CAT, label)

    ranked = sorted(scores.items(), key=lambda kv: -kv[1])
    return [(i, s, why[i]) for i, s in ranked[:limit]]


def main():
    ap = argparse.ArgumentParser(
        description='naive-icons 语义检索',
        epilog='例：python3 search.py "登录页要个锁"  |  python3 search.py loading --limit 3')
    ap.add_argument('query', nargs='?', help='自然语言描述，中英文皆可')
    ap.add_argument('--limit', '-n', type=int, default=5, help='返回数量，默认 5')
    ap.add_argument('--category', '-c', choices=sorted(CATEGORIES), help='限定分类')
    ap.add_argument('--list-categories', action='store_true', help='列出全部分类及图标数')
    ap.add_argument('--json', action='store_true', help='JSON 输出')
    args = ap.parse_args()

    if args.list_categories:
        counts = defaultdict(list)
        for icon_id, (zh, c) in ICONS.items():
            counts[c].append(icon_id)
        for key in sorted(counts, key=lambda k: -len(counts[k])):
            print(f'{key:14s} {CATEGORIES[key]:6s} {len(counts[key]):3d} 枚')
        return 0

    if not args.query:
        ap.print_help()
        return 1

    results = search(args.query, args.limit, args.category)
    if not results:
        print(f'没有命中「{args.query}」。')
        print('试试更贴近 UI 动作的词（如「删除」「登录」「全屏」），'
              '或用英文（delete / login / fullscreen）。')
        print('也可以 --list-categories 看全部分类，或直接翻 reference/catalog.md。')
        return 0

    if args.json:
        import json as _json
        print(_json.dumps([
            {'id': i, 'zh': ICONS[i][0], 'category': ICONS[i][1],
             'category_zh': CATEGORIES[ICONS[i][1]], 'component': component_name(i),
             'score': round(s, 1), 'matched': w}
            for i, s, w in results
        ], ensure_ascii=False, indent=2))
        return 0

    print(f'「{args.query}」→ {len(results)} 个候选（共 {len(ICONS)} 枚）\n')
    for rank, (i, s, w) in enumerate(results, 1):
        zh, c = ICONS[i]
        print(f'{rank}. {i:18s} {zh:8s} {c:14s} {component_name(i):22s} {s:6.1f}')
        print(f'   命中: {"、".join(dict.fromkeys(w))}')
    print('\n取用代码：python3 emit.py <id> --format tsx|svg|jsx')
    return 0


if __name__ == '__main__':
    sys.exit(main())
