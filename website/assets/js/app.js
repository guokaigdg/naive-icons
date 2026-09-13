/* ==========================================================================
   Naive Icons — Official Website
   交互层：主题 / Hero 贴纸墙 / 图标浏览器 / 详情弹窗 / 复制与下载
   无任何依赖，直接以 file:// 打开亦可运行。
   ========================================================================== */
(function () {
  'use strict';

  var DATA = window.NAIVE_ICONS || { icons: [], categories: [], total: 0 };
  var ICONS = DATA.icons || [];
  var CATS = DATA.categories || [];

  var STORE_THEME = 'naive-icons-theme';
  var INK = '#2A2A2A';
  var CREAM = '#FAEDCD';

  var state = {
    q: '',
    cat: 'all',
    size: 55,
    color: INK,
    bg: 'auto',
    colorAuto: true, // 描边色是否仍为自动推导值；用户手动选色后置 false
  };

  var view = [];        // 当前列表（供弹窗左右切换）
  var current = null;   // 弹窗中正在查看的图标
  var currentTab = 'react';

  /* ------------------------------------------------------------ utilities */
  function $(sel, root) {
    return (root || document).querySelector(sel);
  }

  function $$(sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }

  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /** 只替换描边色，保留图标内部的扁平填充 —— 那是 naive 风格的一部分 */
  function recolor(svg, color) {
    return svg.replace(/stroke="#[0-9A-Fa-f]{3,8}"/g, 'stroke="' + color + '"');
  }

  function findIcon(id) {
    for (var i = 0; i < ICONS.length; i++) {
      if (ICONS[i].id === id) return ICONS[i];
    }
    return null;
  }

  function debounce(fn, ms) {
    var t;
    return function () {
      var args = arguments;
      clearTimeout(t);
      t = setTimeout(function () {
        fn.apply(null, args);
      }, ms);
    };
  }

  function toast(msg) {
    var el = $('#toast');
    if (!el) return;
    el.textContent = msg;
    el.setAttribute('data-show', 'true');
    clearTimeout(el._t);
    el._t = setTimeout(function () {
      el.setAttribute('data-show', 'false');
    }, 1900);
  }

  function copyText(text, label) {
    var done = function () {
      toast((label || '内容') + '已复制到剪贴板');
    };

    function fallback() {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.cssText = 'position:fixed;top:-1000px;opacity:0';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
        done();
      } catch (e) {
        toast('复制失败，请手动选择文本');
      }
      document.body.removeChild(ta);
    }

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(done, fallback);
    } else {
      fallback();
    }
  }

  function flash(btn, okText) {
    var old = btn.textContent;
    btn.textContent = okText || '已复制';
    btn.classList.add('is-ok');
    setTimeout(function () {
      btn.textContent = old;
      btn.classList.remove('is-ok');
    }, 1500);
  }

  /* --------------------------------------------------------------- theme */
  var ICON_SUN = 'M12 4V2M12 22v-2M4 12H2M22 12h-2M5.6 5.6 4.2 4.2M19.8 19.8l-1.4-1.4M5.6 18.4l-1.4 1.4M19.8 4.2l-1.4 1.4M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z';
  var ICON_MOON = 'M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z';

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    var path = $('#themeIconPath');
    if (path) path.setAttribute('d', theme === 'dark' ? ICON_SUN : ICON_MOON);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#1b1915' : '#fbf6ea');
    try {
      localStorage.setItem(STORE_THEME, theme);
    } catch (e) {}
  }

  function initTheme() {
    var btn = $('#themeToggle');
    if (btn) {
      btn.addEventListener('click', function () {
        var next =
          document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(next);
        // 站点主题变了，默认描边色要跟着换，否则图标会糊在底色里
        refreshAutoColor();
      });
    }
    // 首屏主题已由 <head> 中的内联脚本设定，这里只同步图标
    applyTheme(document.documentElement.getAttribute('data-theme') || 'light');
  }

  /* ----------------------------------------------------------- hero stage */
  var HERO_ICONS = [
    'cat', 'star', 'heart', 'penguin',
    'sun', 'flower', 'coffee', 'rocket',
    'rainbow', 'bee', 'sailboat', 'cake',
  ];
  var HERO_ROT = [-6, 4, -3, 5, -5, 3, 6, -4, 4, -6, 3, -3];
  var HERO_DY = [4, -4, 3, -3, 5, -5, 2, -2, 4, -3, 3, -4];

  function initHero() {
    var host = $('#heroStage');
    if (!host) return;
    host.innerHTML = HERO_ICONS.map(function (id, i) {
      var icon = findIcon(id);
      if (!icon) return '';
      return (
        '<div class="sticker" style="--rot:' + HERO_ROT[i % 12] + 'deg;--dy:' + HERO_DY[i % 12] + 'px">' +
        recolor(icon.svg, INK) +
        '</div>'
      );
    }).join('');
  }

  /* ------------------------------------------------------------- palette */
  var PALETTE = [
    { name: 'ink', hex: '#2A2A2A' },
    { name: 'navy', hex: '#264653' },
    { name: 'orange', hex: '#E76F51' },
    { name: 'yellow', hex: '#E9C46A' },
    { name: 'pink', hex: '#F4A6A4' },
    { name: 'green', hex: '#588157' },
    { name: 'teal', hex: '#2A9D8F' },
    { name: 'brown', hex: '#8B5E3C' },
    { name: 'cream', hex: '#FAEDCD' },
  ];

  function initPalette() {
    var host = $('#paletteGrid');
    if (!host) return;
    host.innerHTML = PALETTE.map(function (p) {
      return (
        '<button class="swatch" type="button" data-hex="' + p.hex + '" data-name="' + p.name + '">' +
        '<span class="swatch__color" style="background:' + p.hex + '"></span>' +
        '<span class="swatch__meta"><span class="swatch__name">' + p.name + '</span>' +
        '<span class="swatch__hex">' + p.hex + '</span></span>' +
        '</button>'
      );
    }).join('');

    $$('.swatch', host).forEach(function (btn) {
      btn.addEventListener('click', function () {
        var hex = btn.getAttribute('data-hex');
        copyText(hex, '色值 ' + hex + ' ');
      });
    });
  }

  /* ----------------------------------------------- stroke colour swatches */
  function initColorSwatches() {
    var host = $('#colorSwatches');
    if (!host) return;

    var quick = [
      { hex: INK, label: '墨黑' },
      { hex: '#264653', label: '深蓝' },
      { hex: '#8B5E3C', label: '棕' },
      { hex: '#FFFFFF', label: '白' },
      { hex: CREAM, label: '奶油' },
    ];

    host.innerHTML = quick.map(function (c) {
      return (
        '<button class="swatch-btn" type="button" data-hex="' + c.hex + '" ' +
        'style="--sw:' + c.hex + '" aria-pressed="' + (c.hex === state.color) + '" ' +
        'aria-label="描边颜色 ' + c.label + '" title="' + c.label + '"></button>'
      );
    }).join('') +
      '<input type="color" id="colorInput" value="' + state.color + '" aria-label="自定义描边颜色" title="自定义颜色">';

    $$('.swatch-btn', host).forEach(function (btn) {
      btn.addEventListener('click', function () {
        pickColor(btn.getAttribute('data-hex'));
      });
    });

    $('#colorInput').addEventListener('input', function () {
      pickColor(this.value);
    });
  }

  /** 描边默认色由「预览底 + 站点主题」共同决定：
      深色底或深色主题下用奶油色，浅色底上用墨黑 —— 否则深墨描边会糊在深色卡片里 */
  function autoColorFor() {
    if (state.bg === 'dark') return CREAM;
    return document.documentElement.getAttribute('data-theme') === 'dark' ? CREAM : INK;
  }

  /** 只写入状态并重绘，不改动「是否自动」标志 */
  function applyColor(hex) {
    state.color = hex;
    var input = $('#colorInput');
    if (input && /^#[0-9A-Fa-f]{6}$/.test(hex)) input.value = hex;
    $$('.swatch-btn').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-hex').toUpperCase() === hex.toUpperCase()));
    });
    render();
  }

  /** 用户显式选色：此后不再自动推导，尊重用户选择 */
  function pickColor(hex) {
    state.colorAuto = false;
    applyColor(hex);
  }

  /** 主题或预览底变化后重新推导默认色（仅当用户没手动选过颜色） */
  function refreshAutoColor() {
    if (!state.colorAuto) return;
    applyColor(autoColorFor());
  }

  /* ------------------------------------------------------------------ FAQ */
  var FAQS = [
    {
      q: 'Naive Icons 的图标可以商用吗？',
      a: '可以。整套图标采用 MIT 协议发布，全部为原创作品，个人与商业项目均可免费使用，无需署名，也无需申请授权。',
    },
    {
      q: '图标支持哪些 React 版本？',
      a: '组件只使用了最基础的 JSX 与 SVG 属性，没有 Hooks、没有运行时依赖，支持 React 16.8 及以上版本，包括 React 18 与 19，同时兼容 Next.js、Remix 等服务端渲染框架。',
    },
    {
      q: '如何让图标跟随文字颜色变化？',
      a: 'color 属性的默认值就是 currentColor，只要不显式传入 color，图标会自动继承父元素的文字颜色。也可以直接传入 className 或用 CSS 控制。',
    },
    {
      q: '可以只引入用到的几个图标吗？',
      a: '可以。包内提供 ESM 与 CJS 双格式产物，代码分割友好 —— import { HomeIcon } from "naive-icons" 之后，打包工具只会把你实际用到的组件打进产物。也可以直接复制 svg/ 目录中的源文件使用。',
    },
    {
      q: '能修改图标的颜色或描边粗细吗？',
      a: '可以。color 控制描边颜色，strokeWidth 控制描边粗细，fill 控制填充。图标内部的扁平填充块是设计的一部分，默认保留；把 fill 设为 none 即可得到纯线稿版本。',
    },
    {
      q: '项目不是 React，还能用吗？',
      a: '完全可以。svg/ 目录下是 101 个标准 SVG 1.1 文件，可直接用 img 引用、内联到 HTML、制作 SVG sprite 或转成 Icon Font。',
    },
  ];

  function initFaq() {
    var host = $('#faqList');
    if (!host) return;

    host.innerHTML = FAQS.map(function (f, i) {
      var open = i === 0;
      return (
        '<div class="faq__item" data-open="' + open + '">' +
        '<button class="faq__q" type="button" aria-expanded="' + open + '">' +
        '<span>' + esc(f.q) + '</span>' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" ' +
        'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>' +
        '</button>' +
        '<div class="faq__a"' + (open ? '' : ' hidden') + '>' + esc(f.a) + '</div>' +
        '</div>'
      );
    }).join('');

    $$('.faq__q', host).forEach(function (btn) {
      btn.addEventListener('click', function () {
        var item = btn.closest('.faq__item');
        var wasOpen = item.getAttribute('data-open') === 'true';
        item.setAttribute('data-open', String(!wasOpen));
        btn.setAttribute('aria-expanded', String(!wasOpen));
        $('.faq__a', item).hidden = wasOpen;
      });
    });
  }

  /* ------------------------------------------------------ usage codetabs */
  function initUsageTabs() {
    var tabs = $$('.codetabs button');
    if (!tabs.length) return;

    function select(key) {
      tabs.forEach(function (t) {
        var on = t.getAttribute('data-code') === key;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
        var pane = document.getElementById('cp-' + t.getAttribute('data-code'));
        if (pane) pane.hidden = !on;
      });
    }

    tabs.forEach(function (t) {
      t.addEventListener('click', function () {
        select(t.getAttribute('data-code'));
      });
    });

    // 左右方向键在标签间切换
    tabs.forEach(function (t, i) {
      t.addEventListener('keydown', function (e) {
        if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
        e.preventDefault();
        var next = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
        select(next.getAttribute('data-code'));
        next.focus();
      });
    });

    // 初始化时建立正确的 roving tabindex，避免四个标签都能被 Tab 逐个聚焦
    var initial = tabs.filter(function (t) {
      return t.getAttribute('aria-selected') === 'true';
    })[0] || tabs[0];
    select(initial.getAttribute('data-code'));
  }

  /* ---------------------------------------------------------- category chips */
  function initChips() {
    var host = $('#chips');
    if (!host) return;

    var items = [{ id: 'all', label: '全部', count: ICONS.length }];
    CATS.forEach(function (c) {
      var n = ICONS.filter(function (i) {
        return i.cat === c.id;
      }).length;
      if (n) items.push({ id: c.id, label: c.label, count: n });
    });

    host.innerHTML = items.map(function (c) {
      return (
        '<button class="chip" type="button" data-cat="' + c.id + '" aria-pressed="' +
        (c.id === state.cat) + '">' + esc(c.label) +
        '<span class="chip__count">' + c.count + '</span></button>'
      );
    }).join('');

    $$('.chip', host).forEach(function (btn) {
      btn.addEventListener('click', function () {
        state.cat = btn.getAttribute('data-cat');
        $$('.chip', host).forEach(function (b) {
          b.setAttribute('aria-pressed', String(b === btn));
        });
        render();
      });
    });
  }

  /* ------------------------------------------------------------ grid render */
  function filtered() {
    var q = state.q.trim().toLowerCase();
    return ICONS.filter(function (i) {
      if (state.cat !== 'all' && i.cat !== state.cat) return false;
      if (!q) return true;
      return (
        i.id.indexOf(q) > -1 ||
        i.comp.toLowerCase().indexOf(q) > -1 ||
        String(i.zh).indexOf(q) > -1
      );
    });
  }

  function render() {
    var grid = $('#grid');
    if (!grid) return;

    view = filtered();

    var counter = $('#resultCount');
    if (counter) {
      counter.textContent = view.length
        ? '共 ' + view.length + ' 个图标' + (state.q ? '（关键词：' + state.q + '）' : '')
        : '没有匹配的图标';
    }

    if (!view.length) {
      grid.innerHTML = '<p class="empty">没有找到匹配的图标，换个关键词试试</p>';
      return;
    }

    var color = state.color;
    grid.innerHTML = view.map(function (i) {
      return (
        '<button class="cell" type="button" data-id="' + i.id + '">' +
        '<span class="cell__icon">' + recolor(i.svg, color) + '</span>' +
        '<span class="cell__name">' + esc(i.id) + '</span>' +
        '<span class="cell__zh">' + esc(i.zh) + '</span>' +
        '</button>'
      );
    }).join('');

    grid.style.setProperty('--icon-size', state.size + 'px');

    $$('.cell', grid).forEach(function (cell) {
      cell.addEventListener('click', function () {
        openModal(cell.getAttribute('data-id'));
      });
    });
  }

  /* -------------------------------------------------------------- controls */
  function initControls() {
    var search = $('#searchInput');
    var clear = $('#searchClear');

    var onSearch = debounce(function (value) {
      state.q = value;
      if (clear) clear.hidden = !value;
      render();
    }, 120);

    search.addEventListener('input', function () {
      if (clear) clear.hidden = !search.value;
      onSearch(search.value);
    });

    if (clear) {
      clear.addEventListener('click', function () {
        search.value = '';
        state.q = '';
        clear.hidden = true;
        render();
        search.focus();
      });
    }

    // 按 "/" 快速聚焦搜索
    document.addEventListener('keydown', function (e) {
      if (e.key === '/' && !/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName)) {
        var modalOpen = $('#modal') && !$('#modal').hidden;
        if (modalOpen) return;
        e.preventDefault();
        search.focus();
      }
    });

    var size = $('#sizeRange');
    var sizeOut = $('#sizeValue');
    size.addEventListener('input', function () {
      state.size = parseInt(size.value, 10);
      if (sizeOut) sizeOut.textContent = size.value;
      render();
    });

    $$('.segmented button').forEach(function (b) {
      b.addEventListener('click', function () {
        state.bg = b.getAttribute('data-bg');
        $$('.segmented button').forEach(function (x) {
          x.setAttribute('aria-pressed', String(x === b));
        });
        $('#grid').setAttribute('data-bg', state.bg);
        // 预览底变了，默认描边色要跟着换（深色底上用墨色会看不见）
        refreshAutoColor();
      });
    });

    $('#resetBtn').addEventListener('click', function () {
      state.q = '';
      state.cat = 'all';
      state.size = 32;
      state.bg = 'auto';
      state.colorAuto = true;
      search.value = '';
      if (clear) clear.hidden = true;
      size.value = 32;
      if (sizeOut) sizeOut.textContent = '32';
      $('#grid').setAttribute('data-bg', 'auto');
      $$('.chip').forEach(function (c, i) {
        c.setAttribute('aria-pressed', String(i === 0));
      });
      $$('.segmented button').forEach(function (b, i) {
        b.setAttribute('aria-pressed', String(i === 0));
      });
      applyColor(autoColorFor());
      toast('已重置筛选条件');
    });
  }

  /* ----------------------------------------------------------------- modal */
  function codeFor(icon, tab) {
    if (tab === 'react') {
      return '<' + icon.comp + ' size={24} color="' + state.color + '" />';
    }
    if (tab === 'import') {
      return "import { " + icon.comp + " } from 'naive-icons';";
    }
    return recolor(icon.svg, state.color);
  }

  function indexOfCurrent() {
    for (var i = 0; i < view.length; i++) {
      if (view[i].id === current.id) return i;
    }
    return -1;
  }

  function step(delta) {
    if (!view.length) return;
    var i = indexOfCurrent();
    if (i < 0) return;
    var next = (i + delta + view.length) % view.length;
    openModal(view[next].id);
  }

  function openModal(id) {
    var icon = findIcon(id);
    if (!icon) return;
    current = icon;
    currentTab = 'react';

    var modal = $('#modal');
    $('#modalPreview').innerHTML = recolor(icon.svg, state.color);
    $('#modalPreview').style.setProperty('--preview-size', Math.max(96, state.size * 3) + 'px');
    $('#modalTitle').textContent = icon.zh + ' · ' + icon.id;
    $('#modalSub').textContent = icon.comp + ' — svg/' + icon.id + '.svg';
    $('#modalCode').textContent = codeFor(icon, 'react');

    $$('.tabs button').forEach(function (b) {
      b.setAttribute('aria-selected', String(b.getAttribute('data-tab') === 'react'));
    });

    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    setBackgroundInert(true);
    var close = $('.modal__close', modal);
    if (close) close.focus();
  }

  /** 弹窗打开时把背景内容移出焦点顺序，避免 Tab 跑到弹窗外 */
  function setBackgroundInert(on) {
    if (!('inert' in HTMLElement.prototype)) return;
    $$('body > *').forEach(function (el) {
      if (el.id === 'modal' || el.id === 'toast' || el.tagName === 'SCRIPT') return;
      el.inert = on;
    });
  }

  function closeModal() {
    var modal = $('#modal');
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    document.body.style.overflow = '';
    setBackgroundInert(false);
    var back = current ? $('.cell[data-id="' + current.id + '"]') : null;
    if (back) back.focus();
    current = null;
  }

  function initModal() {
    $$('[data-close]').forEach(function (el) {
      el.addEventListener('click', closeModal);
    });

    document.addEventListener('keydown', function (e) {
      var modal = $('#modal');
      if (!modal || modal.hidden) return;
      if (e.key === 'Escape') closeModal();
      else if (e.key === 'ArrowLeft') step(-1);
      else if (e.key === 'ArrowRight') step(1);
    });

    $('#modalPrev').addEventListener('click', function () {
      step(-1);
    });

    $('#modalNext').addEventListener('click', function () {
      step(1);
    });

    $$('.tabs button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        currentTab = btn.getAttribute('data-tab');
        $$('.tabs button').forEach(function (b) {
          b.setAttribute('aria-selected', String(b === btn));
        });
        if (current) $('#modalCode').textContent = codeFor(current, currentTab);
      });
    });

    $('#modalCopy').addEventListener('click', function (e) {
      if (current) {
        copyText(codeFor(current, currentTab), '代码 ');
        flash(e.currentTarget);
      }
    });

    $('#modalCopyName').addEventListener('click', function (e) {
      if (current) {
        copyText(current.comp, '组件名 ' + current.comp + ' ');
        flash(e.currentTarget);
      }
    });

    $('#modalDownload').addEventListener('click', function (e) {
      if (!current) return;
      var svg = recolor(current.svg, state.color);
      var blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = current.id + '.svg';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(function () {
        URL.revokeObjectURL(url);
      }, 1000);
      flash(e.currentTarget, '已下载');
    });
  }

  /* --------------------------------------------------------- copy buttons */
  function initCopyButtons() {
    document.addEventListener('click', function (e) {
      var direct = e.target.closest('[data-copy]');
      if (direct) {
        copyText(direct.getAttribute('data-copy'), (direct.getAttribute('data-copy-label') || '内容') + ' ');
        flash(direct);
        return;
      }
      var target = e.target.closest('[data-copy-target]');
      if (target) {
        var src = document.getElementById(target.getAttribute('data-copy-target'));
        if (src) {
          copyText(src.textContent, '代码 ');
          flash(target);
        }
      }
    });
  }

  /* ------------------------------------------------------------------ boot */
  function init() {
    // 幂等保护：脚本若被重复引入，会形成新的闭包，因此标志必须挂在 window 上，
    // 否则点击类监听器会被绑定两份，一次交互触发两次而互相抵消
    if (window.__naiveIconsBooted) return;
    window.__naiveIconsBooted = true;

    // 首屏主题已由 <head> 内联脚本设定，据此推导出默认描边色，再渲染
    var gridEl = $('#grid');
    if (gridEl) state.bg = gridEl.getAttribute('data-bg') || 'auto';
    state.color = autoColorFor();

    initTheme();
    initHero();
    initChips();
    initPalette();
    initColorSwatches();
    initFaq();
    initUsageTabs();
    initControls();
    initModal();
    initCopyButtons();

    var size = $('#sizeRange');
    if (size) state.size = parseInt(size.value, 10);

    render();

    $$('[data-count]').forEach(function (el) {
      el.textContent = ICONS.length;
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
