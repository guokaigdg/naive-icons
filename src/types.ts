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
} as const;

export type PaletteColor = keyof typeof NAIVE_PALETTE;

/** 所有图标组件名（共 159 个） */
export type IconName = 'AirplaneIcon' | 'AlertCircleIcon' | 'AlertTriangleIcon' | 'AnchorIcon' | 'AppleIcon' | 'ArrowDownIcon' | 'ArrowLeftIcon' | 'ArrowRightIcon' | 'ArrowUpIcon' | 'ArrowUpRightIcon' | 'BadgeCheckIcon' | 'BalloonIcon' | 'BanIcon' | 'BasketballIcon' | 'BearIcon' | 'BeeIcon' | 'BellIcon' | 'BellOffIcon' | 'BicycleIcon' | 'BirdIcon' | 'BookIcon' | 'BookmarkIcon' | 'BulbIcon' | 'ButterflyIcon' | 'CactusIcon' | 'CakeIcon' | 'CalendarIcon' | 'CameraIcon' | 'CandleIcon' | 'CarIcon' | 'CartIcon' | 'CatIcon' | 'ChatIcon' | 'CheckIcon' | 'CheckCircleIcon' | 'CheckSquareIcon' | 'CherryIcon' | 'ChevronDownIcon' | 'ChevronLeftIcon' | 'ChevronRightIcon' | 'ChevronUpIcon' | 'ClockIcon' | 'CloseIcon' | 'CloudIcon' | 'CodeIcon' | 'CoffeeIcon' | 'CoffeeCupIcon' | 'CompassIcon' | 'CopyIcon' | 'CreditCardIcon' | 'DogIcon' | 'DonutIcon' | 'DownloadIcon' | 'DumbbellIcon' | 'EditIcon' | 'EllipsisIcon' | 'ExternalLinkIcon' | 'EyeIcon' | 'EyeOffIcon' | 'FileIcon' | 'FilterIcon' | 'FishIcon' | 'FlagIcon' | 'FlameIcon' | 'FlowerIcon' | 'FolderIcon' | 'FoxIcon' | 'FrogIcon' | 'GiftIcon' | 'GlobeIcon' | 'GoogleChromeIcon' | 'GridIcon' | 'HeadphonesIcon' | 'HeartIcon' | 'HelpCircleIcon' | 'HomeIcon' | 'IcecreamIcon' | 'ImageIcon' | 'InboxIcon' | 'InfoIcon' | 'KeyIcon' | 'LadybugIcon' | 'LampIcon' | 'LeafIcon' | 'LemonIcon' | 'LinkIcon' | 'ListIcon' | 'LocationIcon' | 'LockIcon' | 'LockOpenIcon' | 'MagnetIcon' | 'MailIcon' | 'MapIcon' | 'MaximizeIcon' | 'MenuIcon' | 'MicIcon' | 'MinusIcon' | 'MoonIcon' | 'MoreVerticalIcon' | 'MountainIcon' | 'MushroomIcon' | 'MusicIcon' | 'OwlIcon' | 'PaintbrushIcon' | 'PaperclipIcon' | 'PauseIcon' | 'PencilIcon' | 'PenguinIcon' | 'PhoneIcon' | 'PlayIcon' | 'PlusIcon' | 'RabbitIcon' | 'RainbowIcon' | 'RedoIcon' | 'RefreshIcon' | 'RocketIcon' | 'SailboatIcon' | 'SaveIcon' | 'ScooterIcon' | 'SearchIcon' | 'SendIcon' | 'SettingsIcon' | 'ShareIcon' | 'ShieldIcon' | 'ShoppingBagIcon' | 'SlidersIcon' | 'SmileIcon' | 'SnailIcon' | 'SnowflakeIcon' | 'SortIcon' | 'SpinnerIcon' | 'StarIcon' | 'StopIcon' | 'StrawberryIcon' | 'SunIcon' | 'TagIcon' | 'TentIcon' | 'ThermometerIcon' | 'ThumbsUpIcon' | 'TrainIcon' | 'TrashIcon' | 'TreeIcon' | 'TrophyIcon' | 'UmbrellaIcon' | 'UndoIcon' | 'UnlinkIcon' | 'UploadIcon' | 'UserIcon' | 'UserPlusIcon' | 'UsersIcon' | 'VideoIcon' | 'VolumeIcon' | 'VolumeXIcon' | 'WaterCupIcon' | 'WatermelonIcon' | 'WifiIcon' | 'XCircleIcon' | 'ZoomInIcon' | 'ZoomOutIcon';

/** 图标组件类型 */
export type IconComponent = FC<IconProps>;
