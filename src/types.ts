import { FC } from 'react';
import type { IconProps } from './iconProps';

export type { IconProps } from './iconProps';

/** Naive Icons 调色板 */
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

/** Naive Icons 图标组件名（共 101 个） */
export type IconName =
  | 'AirplaneIcon' | 'AnchorIcon' | 'AppleIcon' | 'BalloonIcon' | 'BearIcon'
  | 'BeeIcon' | 'BellIcon' | 'BicycleIcon' | 'BirdIcon' | 'BookIcon'
  | 'BookmarkIcon' | 'BulbIcon' | 'ButterflyIcon' | 'CactusIcon' | 'CakeIcon'
  | 'CalendarIcon' | 'CameraIcon' | 'CandleIcon' | 'CarIcon' | 'CartIcon'
  | 'CatIcon' | 'ChatIcon' | 'CheckIcon' | 'CherryIcon' | 'ClockIcon'
  | 'CloseIcon' | 'CloudIcon' | 'CodeIcon' | 'CoffeeIcon' | 'CompassIcon'
  | 'CreditCardIcon' | 'DogIcon' | 'DonutIcon' | 'DownloadIcon' | 'EditIcon'
  | 'EyeIcon' | 'FileIcon' | 'FishIcon' | 'FlagIcon' | 'FlameIcon'
  | 'FlowerIcon' | 'FolderIcon' | 'FoxIcon' | 'FrogIcon' | 'GiftIcon'
  | 'GlobeIcon' | 'HeadphonesIcon' | 'HeartIcon' | 'HomeIcon' | 'IcecreamIcon'
  | 'ImageIcon' | 'KeyIcon' | 'LadybugIcon' | 'LampIcon' | 'LeafIcon'
  | 'LemonIcon' | 'LocationIcon' | 'LockIcon' | 'MagnetIcon' | 'MailIcon'
  | 'MapIcon' | 'MicIcon' | 'MoonIcon' | 'MushroomIcon' | 'MusicIcon'
  | 'OwlIcon' | 'PaintbrushIcon' | 'PencilIcon' | 'PenguinIcon' | 'PhoneIcon'
  | 'PlayIcon' | 'PlusIcon' | 'RabbitIcon' | 'RainbowIcon' | 'RefreshIcon'
  | 'RocketIcon' | 'SailboatIcon' | 'SaveIcon' | 'SearchIcon' | 'SettingsIcon'
  | 'ShareIcon' | 'ShoppingBagIcon' | 'SmileIcon' | 'SnailIcon' | 'SnowflakeIcon'
  | 'StarIcon' | 'StrawberryIcon' | 'SunIcon' | 'TagIcon' | 'ThermometerIcon'
  | 'ThumbsUpIcon' | 'TrainIcon' | 'TrashIcon' | 'TreeIcon' | 'TrophyIcon'
  | 'UmbrellaIcon' | 'UploadIcon' | 'UserIcon' | 'VideoIcon' | 'WatermelonIcon'
  | 'WifiIcon';

/** Naive Icons 图标组件类型 */
export type IconComponent = FC<IconProps>;

/** Naive Icons 图标分类 */
export const ICON_CATEGORIES = [
  'interface',
  'action',
  'media',
  'navigation',
  'communication',
  'nature',
  'animals',
  'food',
  'objects',
  'transport',
  'emoji',
] as const;

export type IconCategory = (typeof ICON_CATEGORIES)[number];
