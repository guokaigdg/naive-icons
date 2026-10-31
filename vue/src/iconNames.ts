/**
 * 所有内置图标的 id（kebab-case），运行时数组。
 *
 * IconId 只是纯类型，编译后不存在；需要「按名字动态取图标」时用这个数组，
 * 配合动态 import 别把 201 枚全打进包：
 *
 * import { iconNames } from 'naive-icons-vue';
 *
 * const map = { 'arrow-up-down': () => import('naive-icons-vue/icons/ArrowUpDownIcon').then(m => m.ArrowUpDownIcon) };
 */
export const iconNames = [
  'airplane',
  'alert-circle',
  'alert-triangle',
  'anchor',
  'apple',
  'arrow-down',
  'arrow-down-circle',
  'arrow-down-left',
  'arrow-down-right',
  'arrow-jump',
  'arrow-left',
  'arrow-left-circle',
  'arrow-right',
  'arrow-right-circle',
  'arrow-up',
  'arrow-up-circle',
  'arrow-up-down',
  'arrow-up-left',
  'arrow-up-right',
  'badge-check',
  'balloon',
  'ban',
  'basketball',
  'battery',
  'bear',
  'bee',
  'bell',
  'bell-off',
  'bicycle',
  'bird',
  'bold',
  'bolt',
  'book',
  'bookmark',
  'bulb',
  'butterfly',
  'cactus',
  'cake',
  'calculator',
  'calendar',
  'camera',
  'candle',
  'car',
  'cart',
  'cat',
  'charger',
  'chat',
  'check',
  'check-circle',
  'check-square',
  'cherry',
  'chevron-down',
  'chevron-left',
  'chevron-right',
  'chevron-up',
  'clipboard',
  'clock',
  'close',
  'cloud',
  'code',
  'coffee',
  'coffee-cup',
  'compass',
  'copy',
  'credit-card',
  'dog',
  'donut',
  'download',
  'dumbbell',
  'edit',
  'ellipsis',
  'external-link',
  'eye',
  'eye-off',
  'file',
  'filter',
  'fish',
  'flag',
  'flame',
  'flower',
  'folder',
  'folder-minus',
  'folder-plus',
  'fox',
  'frog',
  'gift',
  'globe',
  'google-chrome',
  'grid',
  'headphones',
  'heart',
  'help-circle',
  'home',
  'icecream',
  'image',
  'inbox',
  'info',
  'italic',
  'key',
  'keyboard',
  'ladybug',
  'lamp',
  'leaf',
  'lemon',
  'link',
  'list',
  'location',
  'lock',
  'lock-open',
  'magnet',
  'mail',
  'map',
  'map-pin',
  'maximize',
  'menu',
  'mic',
  'minus',
  'minus-circle',
  'monitor',
  'moon',
  'more-vertical',
  'mountain',
  'mouse',
  'mushroom',
  'music',
  'newspaper',
  'owl',
  'paintbrush',
  'palette',
  'paperclip',
  'pause',
  'pause-circle',
  'pencil',
  'penguin',
  'phone',
  'play',
  'play-circle',
  'plus',
  'plus-circle',
  'power',
  'printer',
  'rabbit',
  'radio',
  'rainbow',
  'redo',
  'refresh',
  'rocket',
  'rss',
  'sailboat',
  'save',
  'scissors',
  'scooter',
  'search',
  'send',
  'settings',
  'share',
  'shield',
  'shopping-bag',
  'shopping-cart',
  'sliders',
  'smile',
  'snail',
  'snowflake',
  'sort',
  'sparkles',
  'spinner',
  'star',
  'stop',
  'stop-circle',
  'strawberry',
  'sun',
  'tag',
  'tent',
  'thermometer',
  'thumbs-up',
  'train',
  'trash',
  'tree',
  'trophy',
  'truck',
  'tv',
  'umbrella',
  'underline',
  'undo',
  'unlink',
  'upload',
  'user',
  'user-circle',
  'user-minus',
  'user-plus',
  'users',
  'video',
  'volume',
  'volume-x',
  'water-cup',
  'watermelon',
  'wifi',
  'wifi-off',
  'x-circle',
  'zoom-in',
  'zoom-out',
] as const;

/** 所有内置图标的 id 类型，与 iconNames 一一对应 */
export type IconId = (typeof iconNames)[number];

/** 所有内置图标的组件名类型 */
export type IconName =
  | 'AirplaneIcon'
  | 'AlertCircleIcon'
  | 'AlertTriangleIcon'
  | 'AnchorIcon'
  | 'AppleIcon'
  | 'ArrowDownCircleIcon'
  | 'ArrowDownIcon'
  | 'ArrowDownLeftIcon'
  | 'ArrowDownRightIcon'
  | 'ArrowJumpIcon'
  | 'ArrowLeftCircleIcon'
  | 'ArrowLeftIcon'
  | 'ArrowRightCircleIcon'
  | 'ArrowRightIcon'
  | 'ArrowUpCircleIcon'
  | 'ArrowUpDownIcon'
  | 'ArrowUpIcon'
  | 'ArrowUpLeftIcon'
  | 'ArrowUpRightIcon'
  | 'BadgeCheckIcon'
  | 'BalloonIcon'
  | 'BanIcon'
  | 'BasketballIcon'
  | 'BatteryIcon'
  | 'BearIcon'
  | 'BeeIcon'
  | 'BellIcon'
  | 'BellOffIcon'
  | 'BicycleIcon'
  | 'BirdIcon'
  | 'BoldIcon'
  | 'BoltIcon'
  | 'BookIcon'
  | 'BookmarkIcon'
  | 'BulbIcon'
  | 'ButterflyIcon'
  | 'CactusIcon'
  | 'CakeIcon'
  | 'CalculatorIcon'
  | 'CalendarIcon'
  | 'CameraIcon'
  | 'CandleIcon'
  | 'CarIcon'
  | 'CartIcon'
  | 'CatIcon'
  | 'ChargerIcon'
  | 'ChatIcon'
  | 'CheckCircleIcon'
  | 'CheckIcon'
  | 'CheckSquareIcon'
  | 'CherryIcon'
  | 'ChevronDownIcon'
  | 'ChevronLeftIcon'
  | 'ChevronRightIcon'
  | 'ChevronUpIcon'
  | 'ClipboardIcon'
  | 'ClockIcon'
  | 'CloseIcon'
  | 'CloudIcon'
  | 'CodeIcon'
  | 'CoffeeCupIcon'
  | 'CoffeeIcon'
  | 'CompassIcon'
  | 'CopyIcon'
  | 'CreditCardIcon'
  | 'DogIcon'
  | 'DonutIcon'
  | 'DownloadIcon'
  | 'DumbbellIcon'
  | 'EditIcon'
  | 'EllipsisIcon'
  | 'ExternalLinkIcon'
  | 'EyeIcon'
  | 'EyeOffIcon'
  | 'FileIcon'
  | 'FilterIcon'
  | 'FishIcon'
  | 'FlagIcon'
  | 'FlameIcon'
  | 'FlowerIcon'
  | 'FolderIcon'
  | 'FolderMinusIcon'
  | 'FolderPlusIcon'
  | 'FoxIcon'
  | 'FrogIcon'
  | 'GiftIcon'
  | 'GlobeIcon'
  | 'GoogleChromeIcon'
  | 'GridIcon'
  | 'HeadphonesIcon'
  | 'HeartIcon'
  | 'HelpCircleIcon'
  | 'HomeIcon'
  | 'IcecreamIcon'
  | 'ImageIcon'
  | 'InboxIcon'
  | 'InfoIcon'
  | 'ItalicIcon'
  | 'KeyIcon'
  | 'KeyboardIcon'
  | 'LadybugIcon'
  | 'LampIcon'
  | 'LeafIcon'
  | 'LemonIcon'
  | 'LinkIcon'
  | 'ListIcon'
  | 'LocationIcon'
  | 'LockIcon'
  | 'LockOpenIcon'
  | 'MagnetIcon'
  | 'MailIcon'
  | 'MapIcon'
  | 'MapPinIcon'
  | 'MaximizeIcon'
  | 'MenuIcon'
  | 'MicIcon'
  | 'MinusCircleIcon'
  | 'MinusIcon'
  | 'MonitorIcon'
  | 'MoonIcon'
  | 'MoreVerticalIcon'
  | 'MountainIcon'
  | 'MouseIcon'
  | 'MushroomIcon'
  | 'MusicIcon'
  | 'NewspaperIcon'
  | 'OwlIcon'
  | 'PaintbrushIcon'
  | 'PaletteIcon'
  | 'PaperclipIcon'
  | 'PauseCircleIcon'
  | 'PauseIcon'
  | 'PencilIcon'
  | 'PenguinIcon'
  | 'PhoneIcon'
  | 'PlayCircleIcon'
  | 'PlayIcon'
  | 'PlusCircleIcon'
  | 'PlusIcon'
  | 'PowerIcon'
  | 'PrinterIcon'
  | 'RabbitIcon'
  | 'RadioIcon'
  | 'RainbowIcon'
  | 'RedoIcon'
  | 'RefreshIcon'
  | 'RocketIcon'
  | 'RssIcon'
  | 'SailboatIcon'
  | 'SaveIcon'
  | 'ScissorsIcon'
  | 'ScooterIcon'
  | 'SearchIcon'
  | 'SendIcon'
  | 'SettingsIcon'
  | 'ShareIcon'
  | 'ShieldIcon'
  | 'ShoppingBagIcon'
  | 'ShoppingCartIcon'
  | 'SlidersIcon'
  | 'SmileIcon'
  | 'SnailIcon'
  | 'SnowflakeIcon'
  | 'SortIcon'
  | 'SparklesIcon'
  | 'SpinnerIcon'
  | 'StarIcon'
  | 'StopCircleIcon'
  | 'StopIcon'
  | 'StrawberryIcon'
  | 'SunIcon'
  | 'TagIcon'
  | 'TentIcon'
  | 'ThermometerIcon'
  | 'ThumbsUpIcon'
  | 'TrainIcon'
  | 'TrashIcon'
  | 'TreeIcon'
  | 'TrophyIcon'
  | 'TruckIcon'
  | 'TvIcon'
  | 'UmbrellaIcon'
  | 'UnderlineIcon'
  | 'UndoIcon'
  | 'UnlinkIcon'
  | 'UploadIcon'
  | 'UserCircleIcon'
  | 'UserIcon'
  | 'UserMinusIcon'
  | 'UserPlusIcon'
  | 'UsersIcon'
  | 'VideoIcon'
  | 'VolumeIcon'
  | 'VolumeXIcon'
  | 'WaterCupIcon'
  | 'WatermelonIcon'
  | 'WifiIcon'
  | 'WifiOffIcon'
  | 'XCircleIcon'
  | 'ZoomInIcon'
  | 'ZoomOutIcon'
;
