/**
 * 所有内置图标的 id（kebab-case），运行时数组。
 *
 * IconId 只是纯类型，编译后不存在；需要「按名字动态取图标」时用这个数组，
 * 配合动态 import 别把 202 枚全打进包：
 *
 * import { iconNames } from 'naive-icons-vue';
 *
 * const map = { 'arrow-up-down': () => import('naive-icons-vue/icons/ArrowUpDownIcon').then(m => m.ArrowUpDownIcon) };
 */
export const iconNames = [
  'acorn',
  'airplane',
  'alert-circle',
  'alert-triangle',
  'anchor',
  'apple',
  'archive',
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
  'at-sign',
  'badge-check',
  'balloon',
  'ban',
  'bar-chart',
  'basketball',
  'battery',
  'bear',
  'bee',
  'bell',
  'bell-off',
  'bell-ring',
  'bicycle',
  'bird',
  'bluetooth',
  'bold',
  'bolt',
  'book',
  'bookmark',
  'bread',
  'briefcase',
  'bulb',
  'butterfly',
  'cactus',
  'cake',
  'calculator',
  'calendar',
  'camera',
  'candle',
  'car',
  'carrot',
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
  'clipboard-check',
  'clock',
  'close',
  'cloud',
  'cloud-download',
  'cloud-upload',
  'code',
  'coffee',
  'coffee-cup',
  'compass',
  'cookie',
  'copy',
  'cow',
  'crab',
  'credit-card',
  'crop',
  'database',
  'dog',
  'donut',
  'download',
  'dumbbell',
  'edit',
  'egg',
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
  'folder-open',
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
  'hourglass',
  'icecream',
  'image',
  'inbox',
  'info',
  'italic',
  'jellyfish',
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
  'login',
  'logout',
  'magnet',
  'mail',
  'map',
  'map-pin',
  'maximize',
  'megaphone',
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
  'no-data',
  'owl',
  'paintbrush',
  'palette',
  'paperclip',
  'paste',
  'pause',
  'pause-circle',
  'pencil',
  'penguin',
  'phone',
  'phone-off',
  'pie-chart',
  'play',
  'play-circle',
  'plus',
  'plus-circle',
  'power',
  'presentation',
  'printer',
  'qr-code',
  'rabbit',
  'radio',
  'rain',
  'rainbow',
  'redo',
  'refresh',
  'rocket',
  'rss',
  'sailboat',
  'save',
  'scan',
  'scissors',
  'scooter',
  'search',
  'seedling',
  'send',
  'server',
  'settings',
  'share',
  'shield',
  'shopping-bag',
  'shopping-cart',
  'sidebar',
  'signal',
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
  'table',
  'tag',
  'tent',
  'terminal',
  'thermometer',
  'thumbs-up',
  'ticket',
  'train',
  'trash',
  'tree',
  'trending-up',
  'trophy',
  'truck',
  'tv',
  'umbrella',
  'underline',
  'undo',
  'unlink',
  'upload',
  'user',
  'user-check',
  'user-circle',
  'user-minus',
  'user-plus',
  'users',
  'video',
  'volume',
  'volume-x',
  'wallet',
  'watch',
  'water-cup',
  'watermelon',
  'wifi',
  'wifi-off',
  'wind',
  'x-circle',
  'zoom-in',
  'zoom-out',
] as const;

/** 所有内置图标的 id 类型，与 iconNames 一一对应 */
export type IconId = (typeof iconNames)[number];

/** 所有内置图标的组件名类型 */
export type IconName =
  | 'AcornIcon'
  | 'AirplaneIcon'
  | 'AlertCircleIcon'
  | 'AlertTriangleIcon'
  | 'AnchorIcon'
  | 'AppleIcon'
  | 'ArchiveIcon'
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
  | 'AtSignIcon'
  | 'BadgeCheckIcon'
  | 'BalloonIcon'
  | 'BanIcon'
  | 'BarChartIcon'
  | 'BasketballIcon'
  | 'BatteryIcon'
  | 'BearIcon'
  | 'BeeIcon'
  | 'BellIcon'
  | 'BellOffIcon'
  | 'BellRingIcon'
  | 'BicycleIcon'
  | 'BirdIcon'
  | 'BluetoothIcon'
  | 'BoldIcon'
  | 'BoltIcon'
  | 'BookIcon'
  | 'BookmarkIcon'
  | 'BreadIcon'
  | 'BriefcaseIcon'
  | 'BulbIcon'
  | 'ButterflyIcon'
  | 'CactusIcon'
  | 'CakeIcon'
  | 'CalculatorIcon'
  | 'CalendarIcon'
  | 'CameraIcon'
  | 'CandleIcon'
  | 'CarIcon'
  | 'CarrotIcon'
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
  | 'ClipboardCheckIcon'
  | 'ClipboardIcon'
  | 'ClockIcon'
  | 'CloseIcon'
  | 'CloudDownloadIcon'
  | 'CloudIcon'
  | 'CloudUploadIcon'
  | 'CodeIcon'
  | 'CoffeeCupIcon'
  | 'CoffeeIcon'
  | 'CompassIcon'
  | 'CookieIcon'
  | 'CopyIcon'
  | 'CowIcon'
  | 'CrabIcon'
  | 'CreditCardIcon'
  | 'CropIcon'
  | 'DatabaseIcon'
  | 'DogIcon'
  | 'DonutIcon'
  | 'DownloadIcon'
  | 'DumbbellIcon'
  | 'EditIcon'
  | 'EggIcon'
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
  | 'FolderOpenIcon'
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
  | 'HourglassIcon'
  | 'IcecreamIcon'
  | 'ImageIcon'
  | 'InboxIcon'
  | 'InfoIcon'
  | 'ItalicIcon'
  | 'JellyfishIcon'
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
  | 'LoginIcon'
  | 'LogoutIcon'
  | 'MagnetIcon'
  | 'MailIcon'
  | 'MapIcon'
  | 'MapPinIcon'
  | 'MaximizeIcon'
  | 'MegaphoneIcon'
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
  | 'NoDataIcon'
  | 'OwlIcon'
  | 'PaintbrushIcon'
  | 'PaletteIcon'
  | 'PaperclipIcon'
  | 'PasteIcon'
  | 'PauseCircleIcon'
  | 'PauseIcon'
  | 'PencilIcon'
  | 'PenguinIcon'
  | 'PhoneIcon'
  | 'PhoneOffIcon'
  | 'PieChartIcon'
  | 'PlayCircleIcon'
  | 'PlayIcon'
  | 'PlusCircleIcon'
  | 'PlusIcon'
  | 'PowerIcon'
  | 'PresentationIcon'
  | 'PrinterIcon'
  | 'QrCodeIcon'
  | 'RabbitIcon'
  | 'RadioIcon'
  | 'RainIcon'
  | 'RainbowIcon'
  | 'RedoIcon'
  | 'RefreshIcon'
  | 'RocketIcon'
  | 'RssIcon'
  | 'SailboatIcon'
  | 'SaveIcon'
  | 'ScanIcon'
  | 'ScissorsIcon'
  | 'ScooterIcon'
  | 'SearchIcon'
  | 'SeedlingIcon'
  | 'SendIcon'
  | 'ServerIcon'
  | 'SettingsIcon'
  | 'ShareIcon'
  | 'ShieldIcon'
  | 'ShoppingBagIcon'
  | 'ShoppingCartIcon'
  | 'SidebarIcon'
  | 'SignalIcon'
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
  | 'TableIcon'
  | 'TagIcon'
  | 'TentIcon'
  | 'TerminalIcon'
  | 'ThermometerIcon'
  | 'ThumbsUpIcon'
  | 'TicketIcon'
  | 'TrainIcon'
  | 'TrashIcon'
  | 'TreeIcon'
  | 'TrendingUpIcon'
  | 'TrophyIcon'
  | 'TruckIcon'
  | 'TvIcon'
  | 'UmbrellaIcon'
  | 'UnderlineIcon'
  | 'UndoIcon'
  | 'UnlinkIcon'
  | 'UploadIcon'
  | 'UserCheckIcon'
  | 'UserCircleIcon'
  | 'UserIcon'
  | 'UserMinusIcon'
  | 'UserPlusIcon'
  | 'UsersIcon'
  | 'VideoIcon'
  | 'VolumeIcon'
  | 'VolumeXIcon'
  | 'WalletIcon'
  | 'WatchIcon'
  | 'WaterCupIcon'
  | 'WatermelonIcon'
  | 'WifiIcon'
  | 'WifiOffIcon'
  | 'WindIcon'
  | 'XCircleIcon'
  | 'ZoomInIcon'
  | 'ZoomOutIcon'
;
