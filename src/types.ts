import { FC } from 'react';
import type { IconProps as IconPropsBase } from './iconProps';

/** 所有图标的通用 Props（继承原生 SVG 属性），完整定义见 ./iconProps */
export type IconProps = IconPropsBase;

/** naive 风格调色板 */
export const NAIVE_PALETTE = {
  ink: '#2A2A2A',
  navy: '#264653',
  orange: '#E76F51',
  yellow: '#E9C46A',
  pink: '#F4A6A4',
  green: '#588157',
  teal: '#2A9D8F',
  brown: '#8B5E3C',
  cream: '#FAEDCD',
  white: '#FFFFFF',
} as const;

export type PaletteColor = keyof typeof NAIVE_PALETTE;

/** 所有图标组件名 */
export type IconName = 'AcornIcon' | 'AirplaneIcon' | 'AlertCircleIcon' | 'AlertTriangleIcon' | 'AnchorIcon' | 'AppleIcon' | 'ArchiveIcon' | 'ArrowDownIcon' | 'ArrowDownCircleIcon' | 'ArrowDownLeftIcon' | 'ArrowDownRightIcon' | 'ArrowJumpIcon' | 'ArrowLeftIcon' | 'ArrowLeftCircleIcon' | 'ArrowRightIcon' | 'ArrowRightCircleIcon' | 'ArrowUpIcon' | 'ArrowUpCircleIcon' | 'ArrowUpDownIcon' | 'ArrowUpLeftIcon' | 'ArrowUpRightIcon' | 'AtSignIcon' | 'BadgeCheckIcon' | 'BalloonIcon' | 'BanIcon' | 'BarChartIcon' | 'BasketballIcon' | 'BatteryIcon' | 'BearIcon' | 'BeeIcon' | 'BellIcon' | 'BellOffIcon' | 'BellRingIcon' | 'BicycleIcon' | 'BirdIcon' | 'BluetoothIcon' | 'BoldIcon' | 'BoltIcon' | 'BookIcon' | 'BookmarkIcon' | 'BreadIcon' | 'BriefcaseIcon' | 'BulbIcon' | 'ButterflyIcon' | 'CactusIcon' | 'CakeIcon' | 'CalculatorIcon' | 'CalendarIcon' | 'CameraIcon' | 'CandleIcon' | 'CarIcon' | 'CarrotIcon' | 'CartIcon' | 'CatIcon' | 'ChargerIcon' | 'ChatIcon' | 'CheckIcon' | 'CheckCircleIcon' | 'CheckSquareIcon' | 'CherryIcon' | 'ChevronDownIcon' | 'ChevronLeftIcon' | 'ChevronRightIcon' | 'ChevronUpIcon' | 'ClipboardIcon' | 'ClipboardCheckIcon' | 'ClockIcon' | 'CloseIcon' | 'CloudIcon' | 'CloudDownloadIcon' | 'CloudUploadIcon' | 'CodeIcon' | 'CoffeeIcon' | 'CoffeeCupIcon' | 'CompassIcon' | 'CookieIcon' | 'CopyIcon' | 'CowIcon' | 'CrabIcon' | 'CreditCardIcon' | 'CropIcon' | 'DatabaseIcon' | 'DogIcon' | 'DonutIcon' | 'DownloadIcon' | 'DumbbellIcon' | 'EditIcon' | 'EggIcon' | 'EllipsisIcon' | 'ExternalLinkIcon' | 'EyeIcon' | 'EyeOffIcon' | 'FileIcon' | 'FilterIcon' | 'FishIcon' | 'FlagIcon' | 'FlameIcon' | 'FlowerIcon' | 'FolderIcon' | 'FolderMinusIcon' | 'FolderOpenIcon' | 'FolderPlusIcon' | 'FoxIcon' | 'FrogIcon' | 'GiftIcon' | 'GlobeIcon' | 'GoogleChromeIcon' | 'GridIcon' | 'HeadphonesIcon' | 'HeartIcon' | 'HelpCircleIcon' | 'HomeIcon' | 'HourglassIcon' | 'IcecreamIcon' | 'ImageIcon' | 'InboxIcon' | 'InfoIcon' | 'ItalicIcon' | 'JellyfishIcon' | 'KeyIcon' | 'KeyboardIcon' | 'LadybugIcon' | 'LampIcon' | 'LeafIcon' | 'LemonIcon' | 'LinkIcon' | 'ListIcon' | 'LocationIcon' | 'LockIcon' | 'LockOpenIcon' | 'LoginIcon' | 'LogoutIcon' | 'MagnetIcon' | 'MailIcon' | 'MapIcon' | 'MapPinIcon' | 'MaximizeIcon' | 'MegaphoneIcon' | 'MenuIcon' | 'MicIcon' | 'MinusIcon' | 'MinusCircleIcon' | 'MonitorIcon' | 'MoonIcon' | 'MoreVerticalIcon' | 'MountainIcon' | 'MouseIcon' | 'MushroomIcon' | 'MusicIcon' | 'NewspaperIcon' | 'NoDataIcon' | 'OwlIcon' | 'PaintbrushIcon' | 'PaletteIcon' | 'PaperclipIcon' | 'PasteIcon' | 'PauseIcon' | 'PauseCircleIcon' | 'PencilIcon' | 'PenguinIcon' | 'PhoneIcon' | 'PhoneOffIcon' | 'PieChartIcon' | 'PlayIcon' | 'PlayCircleIcon' | 'PlusIcon' | 'PlusCircleIcon' | 'PowerIcon' | 'PresentationIcon' | 'PrinterIcon' | 'QrCodeIcon' | 'RabbitIcon' | 'RadioIcon' | 'RainIcon' | 'RainbowIcon' | 'RedoIcon' | 'RefreshIcon' | 'RocketIcon' | 'RssIcon' | 'SailboatIcon' | 'SaveIcon' | 'ScanIcon' | 'ScissorsIcon' | 'ScooterIcon' | 'SearchIcon' | 'SeedlingIcon' | 'SendIcon' | 'ServerIcon' | 'SettingsIcon' | 'ShareIcon' | 'ShieldIcon' | 'ShoppingBagIcon' | 'ShoppingCartIcon' | 'SidebarIcon' | 'SignalIcon' | 'SlidersIcon' | 'SmileIcon' | 'SnailIcon' | 'SnowflakeIcon' | 'SortIcon' | 'SparklesIcon' | 'SpinnerIcon' | 'StarIcon' | 'StopIcon' | 'StopCircleIcon' | 'StrawberryIcon' | 'SunIcon' | 'TableIcon' | 'TagIcon' | 'TentIcon' | 'TerminalIcon' | 'ThermometerIcon' | 'ThumbsUpIcon' | 'TicketIcon' | 'TrainIcon' | 'TrashIcon' | 'TreeIcon' | 'TrendingUpIcon' | 'TrophyIcon' | 'TruckIcon' | 'TvIcon' | 'UmbrellaIcon' | 'UnderlineIcon' | 'UndoIcon' | 'UnlinkIcon' | 'UploadIcon' | 'UserIcon' | 'UserCheckIcon' | 'UserCircleIcon' | 'UserMinusIcon' | 'UserPlusIcon' | 'UsersIcon' | 'VideoIcon' | 'VolumeIcon' | 'VolumeXIcon' | 'WalletIcon' | 'WatchIcon' | 'WaterCupIcon' | 'WatermelonIcon' | 'WifiIcon' | 'WifiOffIcon' | 'WindIcon' | 'XCircleIcon' | 'ZoomInIcon' | 'ZoomOutIcon';

/** 图标组件类型 */
export type IconComponent = FC<IconProps>;
