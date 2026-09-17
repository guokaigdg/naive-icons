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

/** 所有图标组件名（共 116 个） */
export type IconName = 'AirplaneIcon' | 'AnchorIcon' | 'AppleIcon' | 'ArrowDownIcon' | 'ArrowLeftIcon' | 'ArrowRightIcon' | 'ArrowUpIcon' | 'BalloonIcon' | 'BearIcon' | 'BeeIcon' | 'BellIcon' | 'BicycleIcon' | 'BirdIcon' | 'BookIcon' | 'BookmarkIcon' | 'BulbIcon' | 'ButterflyIcon' | 'CactusIcon' | 'CakeIcon' | 'CalendarIcon' | 'CameraIcon' | 'CandleIcon' | 'CarIcon' | 'CartIcon' | 'CatIcon' | 'ChatIcon' | 'CheckIcon' | 'CherryIcon' | 'ChevronDownIcon' | 'ChevronLeftIcon' | 'ChevronRightIcon' | 'ChevronUpIcon' | 'ClockIcon' | 'CloseIcon' | 'CloudIcon' | 'CodeIcon' | 'CoffeeIcon' | 'CompassIcon' | 'CopyIcon' | 'CreditCardIcon' | 'DogIcon' | 'DonutIcon' | 'DownloadIcon' | 'EditIcon' | 'EllipsisIcon' | 'ExternalLinkIcon' | 'EyeIcon' | 'FileIcon' | 'FishIcon' | 'FlagIcon' | 'FlameIcon' | 'FlowerIcon' | 'FolderIcon' | 'FoxIcon' | 'FrogIcon' | 'GiftIcon' | 'GlobeIcon' | 'HeadphonesIcon' | 'HeartIcon' | 'HomeIcon' | 'IcecreamIcon' | 'ImageIcon' | 'KeyIcon' | 'LadybugIcon' | 'LampIcon' | 'LeafIcon' | 'LemonIcon' | 'LinkIcon' | 'LocationIcon' | 'LockIcon' | 'MagnetIcon' | 'MailIcon' | 'MapIcon' | 'MenuIcon' | 'MicIcon' | 'MinusIcon' | 'MoonIcon' | 'MushroomIcon' | 'MusicIcon' | 'OwlIcon' | 'PaintbrushIcon' | 'PencilIcon' | 'PenguinIcon' | 'PhoneIcon' | 'PlayIcon' | 'PlusIcon' | 'RabbitIcon' | 'RainbowIcon' | 'RefreshIcon' | 'RocketIcon' | 'SailboatIcon' | 'SaveIcon' | 'SearchIcon' | 'SettingsIcon' | 'ShareIcon' | 'ShoppingBagIcon' | 'SmileIcon' | 'SnailIcon' | 'SnowflakeIcon' | 'StarIcon' | 'StrawberryIcon' | 'SunIcon' | 'TagIcon' | 'ThermometerIcon' | 'ThumbsUpIcon' | 'TrainIcon' | 'TrashIcon' | 'TreeIcon' | 'TrophyIcon' | 'UmbrellaIcon' | 'UnlinkIcon' | 'UploadIcon' | 'UserIcon' | 'VideoIcon' | 'WatermelonIcon' | 'WifiIcon';

/** 图标组件类型 */
export type IconComponent = FC<IconProps>;
