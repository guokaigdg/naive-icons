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
export type IconName = 'AirplaneIcon' | 'AlertCircleIcon' | 'AlertTriangleIcon' | 'AnchorIcon' | 'AppleIcon' | 'ArrowDownIcon' | 'ArrowDownCircleIcon' | 'ArrowDownLeftIcon' | 'ArrowDownRightIcon' | 'ArrowJumpIcon' | 'ArrowLeftIcon' | 'ArrowLeftCircleIcon' | 'ArrowRightIcon' | 'ArrowRightCircleIcon' | 'ArrowUpIcon' | 'ArrowUpCircleIcon' | 'ArrowUpDownIcon' | 'ArrowUpLeftIcon' | 'ArrowUpRightIcon' | 'BadgeCheckIcon' | 'BalloonIcon' | 'BanIcon' | 'BasketballIcon' | 'BatteryIcon' | 'BearIcon' | 'BeeIcon' | 'BellIcon' | 'BellOffIcon' | 'BicycleIcon' | 'BirdIcon' | 'BoldIcon' | 'BoltIcon' | 'BookIcon' | 'BookmarkIcon' | 'BulbIcon' | 'ButterflyIcon' | 'CactusIcon' | 'CakeIcon' | 'CalculatorIcon' | 'CalendarIcon' | 'CameraIcon' | 'CandleIcon' | 'CarIcon' | 'CartIcon' | 'CatIcon' | 'ChargerIcon' | 'ChatIcon' | 'CheckIcon' | 'CheckCircleIcon' | 'CheckSquareIcon' | 'CherryIcon' | 'ChevronDownIcon' | 'ChevronLeftIcon' | 'ChevronRightIcon' | 'ChevronUpIcon' | 'ClipboardIcon' | 'ClockIcon' | 'CloseIcon' | 'CloudIcon' | 'CodeIcon' | 'CoffeeIcon' | 'CoffeeCupIcon' | 'CompassIcon' | 'CopyIcon' | 'CreditCardIcon' | 'DogIcon' | 'DonutIcon' | 'DownloadIcon' | 'DumbbellIcon' | 'EditIcon' | 'EllipsisIcon' | 'ExternalLinkIcon' | 'EyeIcon' | 'EyeOffIcon' | 'FileIcon' | 'FilterIcon' | 'FishIcon' | 'FlagIcon' | 'FlameIcon' | 'FlowerIcon' | 'FolderIcon' | 'FolderMinusIcon' | 'FolderPlusIcon' | 'FoxIcon' | 'FrogIcon' | 'GiftIcon' | 'GlobeIcon' | 'GoogleChromeIcon' | 'GridIcon' | 'HeadphonesIcon' | 'HeartIcon' | 'HelpCircleIcon' | 'HomeIcon' | 'IcecreamIcon' | 'ImageIcon' | 'InboxIcon' | 'InfoIcon' | 'ItalicIcon' | 'KeyIcon' | 'KeyboardIcon' | 'LadybugIcon' | 'LampIcon' | 'LeafIcon' | 'LemonIcon' | 'LinkIcon' | 'ListIcon' | 'LocationIcon' | 'LockIcon' | 'LockOpenIcon' | 'MagnetIcon' | 'MailIcon' | 'MapIcon' | 'MapPinIcon' | 'MaximizeIcon' | 'MenuIcon' | 'MicIcon' | 'MinusIcon' | 'MinusCircleIcon' | 'MonitorIcon' | 'MoonIcon' | 'MoreVerticalIcon' | 'MountainIcon' | 'MouseIcon' | 'MushroomIcon' | 'MusicIcon' | 'NewspaperIcon' | 'OwlIcon' | 'PaintbrushIcon' | 'PaletteIcon' | 'PaperclipIcon' | 'PauseIcon' | 'PauseCircleIcon' | 'PencilIcon' | 'PenguinIcon' | 'PhoneIcon' | 'PlayIcon' | 'PlayCircleIcon' | 'PlusIcon' | 'PlusCircleIcon' | 'PowerIcon' | 'PrinterIcon' | 'RabbitIcon' | 'RadioIcon' | 'RainbowIcon' | 'RedoIcon' | 'RefreshIcon' | 'RocketIcon' | 'RssIcon' | 'SailboatIcon' | 'SaveIcon' | 'ScissorsIcon' | 'ScooterIcon' | 'SearchIcon' | 'SendIcon' | 'SettingsIcon' | 'ShareIcon' | 'ShieldIcon' | 'ShoppingBagIcon' | 'ShoppingCartIcon' | 'SlidersIcon' | 'SmileIcon' | 'SnailIcon' | 'SnowflakeIcon' | 'SortIcon' | 'SparklesIcon' | 'SpinnerIcon' | 'StarIcon' | 'StopIcon' | 'StopCircleIcon' | 'StrawberryIcon' | 'SunIcon' | 'TagIcon' | 'TentIcon' | 'ThermometerIcon' | 'ThumbsUpIcon' | 'TrainIcon' | 'TrashIcon' | 'TreeIcon' | 'TrophyIcon' | 'TruckIcon' | 'TvIcon' | 'UmbrellaIcon' | 'UnderlineIcon' | 'UndoIcon' | 'UnlinkIcon' | 'UploadIcon' | 'UserIcon' | 'UserCircleIcon' | 'UserMinusIcon' | 'UserPlusIcon' | 'UsersIcon' | 'VideoIcon' | 'VolumeIcon' | 'VolumeXIcon' | 'WaterCupIcon' | 'WatermelonIcon' | 'WifiIcon' | 'WifiOffIcon' | 'XCircleIcon' | 'ZoomInIcon' | 'ZoomOutIcon';

/** 图标组件类型 */
export type IconComponent = FC<IconProps>;
