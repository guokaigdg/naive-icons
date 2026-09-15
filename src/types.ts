import { SVGProps, FC } from 'react';

/** 所有图标的通用 Props（继承原生 SVG 属性） */
export interface IconProps extends SVGProps<SVGSVGElement> {
  /** 图标尺寸（宽高等同），默认 48 */
  size?: number | string;
}

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

/** 所有图标组件名（共 105 个） */
export type IconName = 'AirplaneIconIcon' | 'AnchorIconIcon' | 'AppleIconIcon' | 'ArrowDownIconIcon' | 'ArrowLeftIconIcon' | 'ArrowRightIconIcon' | 'ArrowUpIconIcon' | 'BalloonIconIcon' | 'BearIconIcon' | 'BeeIconIcon' | 'BellIconIcon' | 'BicycleIconIcon' | 'BirdIconIcon' | 'BookIconIcon' | 'BookmarkIconIcon' | 'BulbIconIcon' | 'ButterflyIconIcon' | 'CactusIconIcon' | 'CakeIconIcon' | 'CalendarIconIcon' | 'CameraIconIcon' | 'CandleIconIcon' | 'CarIconIcon' | 'CartIconIcon' | 'CatIconIcon' | 'ChatIconIcon' | 'CheckIconIcon' | 'CherryIconIcon' | 'ClockIconIcon' | 'CloseIconIcon' | 'CloudIconIcon' | 'CodeIconIcon' | 'CoffeeIconIcon' | 'CompassIconIcon' | 'CreditCardIconIcon' | 'DogIconIcon' | 'DonutIconIcon' | 'DownloadIconIcon' | 'EditIconIcon' | 'EyeIconIcon' | 'FileIconIcon' | 'FishIconIcon' | 'FlagIconIcon' | 'FlameIconIcon' | 'FlowerIconIcon' | 'FolderIconIcon' | 'FoxIconIcon' | 'FrogIconIcon' | 'GiftIconIcon' | 'GlobeIconIcon' | 'HeadphonesIconIcon' | 'HeartIconIcon' | 'HomeIconIcon' | 'IcecreamIconIcon' | 'ImageIconIcon' | 'KeyIconIcon' | 'LadybugIconIcon' | 'LampIconIcon' | 'LeafIconIcon' | 'LemonIconIcon' | 'LocationIconIcon' | 'LockIconIcon' | 'MagnetIconIcon' | 'MailIconIcon' | 'MapIconIcon' | 'MicIconIcon' | 'MoonIconIcon' | 'MushroomIconIcon' | 'MusicIconIcon' | 'OwlIconIcon' | 'PaintbrushIconIcon' | 'PencilIconIcon' | 'PenguinIconIcon' | 'PhoneIconIcon' | 'PlayIconIcon' | 'PlusIconIcon' | 'RabbitIconIcon' | 'RainbowIconIcon' | 'RefreshIconIcon' | 'RocketIconIcon' | 'SailboatIconIcon' | 'SaveIconIcon' | 'SearchIconIcon' | 'SettingsIconIcon' | 'ShareIconIcon' | 'ShoppingBagIconIcon' | 'SmileIconIcon' | 'SnailIconIcon' | 'SnowflakeIconIcon' | 'StarIconIcon' | 'StrawberryIconIcon' | 'SunIconIcon' | 'TagIconIcon' | 'ThermometerIconIcon' | 'ThumbsUpIconIcon' | 'TrainIconIcon' | 'TrashIconIcon' | 'TreeIconIcon' | 'TrophyIconIcon' | 'UmbrellaIconIcon' | 'UploadIconIcon' | 'UserIconIcon' | 'VideoIconIcon' | 'WatermelonIconIcon' | 'WifiIconIcon';

/** 图标组件类型 */
export type IconComponent = FC<IconProps>;
