/**
 * 所有内置图标的 id（kebab-case），运行时数组。
 *
 * IconId 只是纯类型，编译后不存在；需要「按名字动态取图标」时用这个数组，
 * 配合动态 import 别把 709 枚全打进包：
 *
 * import { iconNames } from 'naive-icons-vue';
 *
 * const map = { 'arrow-up-down': () => import('naive-icons-vue/icons/ArrowUpDownIcon').then(m => m.ArrowUpDownIcon) };
 */
export const iconNames = [
  'acorn',
  'activity',
  'air-conditioner',
  'air-fryer',
  'airplane',
  'airport',
  'alarm-clock',
  'alert-circle',
  'alert-triangle',
  'ambulance',
  'anchor',
  'angel',
  'angry',
  'anvil',
  'apartment',
  'apple',
  'archery',
  'archive',
  'arrow-down',
  'arrow-down-circle',
  'arrow-down-left',
  'arrow-down-right',
  'arrow-jump',
  'arrow-left',
  'arrow-left-circle',
  'arrow-left-right',
  'arrow-right',
  'arrow-right-circle',
  'arrow-up',
  'arrow-up-circle',
  'arrow-up-down',
  'arrow-up-left',
  'arrow-up-right',
  'at-sign',
  'atm',
  'audio-lines',
  'audit',
  'avocado',
  'axe',
  'baby-bottle',
  'backpack',
  'bacon',
  'badge-check',
  'badminton',
  'balloon',
  'ban',
  'bandage',
  'bank',
  'banknote',
  'bar-chart',
  'barber',
  'barcode',
  'barn',
  'barrier',
  'baseball',
  'basket',
  'basketball',
  'bat',
  'bathtub',
  'battery',
  'bear',
  'bed',
  'bee',
  'beer',
  'bell',
  'bell-off',
  'bell-ring',
  'bicycle',
  'binder',
  'bird',
  'blanket',
  'blender',
  'bluetooth',
  'blush',
  'bold',
  'bolt',
  'bone',
  'book',
  'book-open',
  'bookmark',
  'bowling',
  'boxing-glove',
  'braces',
  'brain',
  'bread',
  'briefcase',
  'broccoli',
  'bubble-tea',
  'bucket',
  'budget',
  'building',
  'bulb',
  'burger',
  'bus',
  'bus-stop',
  'business-card',
  'butterfly',
  'cable-car',
  'cactus',
  'cafe',
  'cake',
  'calculator',
  'calendar',
  'calendar-check',
  'camera',
  'candle',
  'candlestick-chart',
  'candy',
  'captions',
  'car',
  'cargo-ship',
  'carrot',
  'cart',
  'cash-register',
  'castle',
  'cat',
  'charger',
  'charging-station',
  'chat',
  'check',
  'check-circle',
  'check-square',
  'cherry',
  'chevron-down',
  'chevron-left',
  'chevron-right',
  'chevron-up',
  'chicken',
  'chisel',
  'chocolate',
  'chopsticks',
  'church',
  'cinema',
  'circle',
  'circle-dot',
  'clamp',
  'clapperboard',
  'clipboard',
  'clipboard-check',
  'clock',
  'close',
  'cloud',
  'cloud-download',
  'cloud-lightning',
  'cloud-off',
  'cloud-upload',
  'cocktail',
  'code',
  'coffee',
  'coffee-cup',
  'coffee-machine',
  'coin',
  'command',
  'compass',
  'confused',
  'cookie',
  'cool',
  'copy',
  'cotton-swab',
  'courthouse',
  'cow',
  'cpu',
  'crab',
  'crane',
  'credit-card',
  'crop',
  'crosshair',
  'crown',
  'crutch',
  'cry',
  'cupcake',
  'currency-dollar',
  'currency-euro',
  'currency-pound',
  'currency-yuan',
  'cursor',
  'darts',
  'database',
  'defibrillator',
  'desk',
  'diamond',
  'dice',
  'dishwasher',
  'dna',
  'dog',
  'donation',
  'donut',
  'door',
  'download',
  'dragonfly',
  'drill',
  'drizzle',
  'drone',
  'droplet',
  'duck',
  'dumbbell',
  'dumpling',
  'ear',
  'eclipse',
  'edit',
  'egg',
  'elephant',
  'elevator',
  'ellipsis',
  'excavator',
  'exchange',
  'expand',
  'external-link',
  'eye',
  'eye-chart',
  'eye-off',
  'factory',
  'fan',
  'fast-forward',
  'fence',
  'ferry',
  'file',
  'file-audio',
  'file-cabinet',
  'file-check',
  'file-code',
  'file-image',
  'file-lock',
  'file-plus',
  'file-question',
  'file-spreadsheet',
  'file-text',
  'file-video',
  'file-x',
  'files',
  'film',
  'filter',
  'fire-extinguisher',
  'fire-station',
  'fire-truck',
  'first-aid',
  'fish',
  'fishing',
  'flag',
  'flame',
  'flashlight',
  'flask',
  'flower',
  'fog',
  'folder',
  'folder-check',
  'folder-minus',
  'folder-open',
  'folder-plus',
  'forest',
  'fork',
  'forklift',
  'forward',
  'fox',
  'fried-egg',
  'fries',
  'frog',
  'frown',
  'gamepad',
  'gas-station',
  'gift',
  'giraffe',
  'git-branch',
  'glasses',
  'globe',
  'goat',
  'golf',
  'google-chrome',
  'graduation-cap',
  'grape',
  'grid',
  'grip',
  'gym',
  'hail',
  'hair-dryer',
  'hammer',
  'hanger',
  'hard-drive',
  'hash',
  'headphones',
  'hearing-aid',
  'heart',
  'heart-eyes',
  'heart-pulse',
  'helicopter',
  'help-circle',
  'highlighter',
  'hiking',
  'hole-punch',
  'home',
  'honey',
  'hospital',
  'hospital-bed',
  'hotel',
  'hotpot',
  'hourglass',
  'humidifier',
  'icecream',
  'id-card',
  'image',
  'inbox',
  'indent',
  'info',
  'invoice',
  'iron',
  'italic',
  'iv-drip',
  'jackhammer',
  'jellyfish',
  'joystick',
  'juice',
  'kanban',
  'kettle',
  'kettlebell',
  'key',
  'keyboard',
  'kiss',
  'koala',
  'label-maker',
  'ladder',
  'ladybug',
  'lamp',
  'laptop',
  'laugh',
  'layers',
  'layout-dashboard',
  'leaf',
  'ledger',
  'lemon',
  'level',
  'library',
  'lighthouse',
  'line-chart',
  'link',
  'lion',
  'lipstick',
  'list',
  'list-check',
  'list-plus',
  'loan',
  'lobster',
  'locate',
  'location',
  'location-off',
  'lock',
  'lock-open',
  'login',
  'logout',
  'lollipop',
  'luggage',
  'lungs',
  'magazine',
  'magnet',
  'mail',
  'mail-check',
  'mail-lock',
  'mail-minus',
  'mail-open',
  'mail-plus',
  'mail-question',
  'map',
  'map-pin',
  'marker',
  'maximize',
  'medal',
  'medical-glove',
  'medical-mask',
  'medicine-bottle',
  'megaphone',
  'menu',
  'message-circle',
  'message-square',
  'message-square-dots',
  'message-square-plus',
  'messages',
  'mic',
  'mic-off',
  'microscope',
  'microwave',
  'milestone',
  'milk',
  'minimize',
  'minus',
  'minus-circle',
  'mirror',
  'money-mouth',
  'monitor',
  'monkey',
  'moon',
  'more-vertical',
  'mosque',
  'motorcycle',
  'mountain',
  'mouse',
  'move',
  'museum',
  'mushroom',
  'music',
  'name-tag',
  'navigation',
  'nervous',
  'neutral',
  'newspaper',
  'no-data',
  'no-entry',
  'noodle',
  'notebook',
  'octopus',
  'office-chair',
  'outdent',
  'oven',
  'owl',
  'oxygen-tank',
  'paint-roller',
  'paintbrush',
  'palette',
  'paperclip',
  'parachute',
  'park',
  'parking',
  'party',
  'passport',
  'paste',
  'pause',
  'pause-circle',
  'paw-print',
  'peacock',
  'pear',
  'pedestrian-crossing',
  'pen-holder',
  'pencil',
  'penguin',
  'percent',
  'pharmacy',
  'phone',
  'phone-incoming',
  'phone-missed',
  'phone-off',
  'phone-outgoing',
  'pickaxe',
  'pickup-truck',
  'picture-in-picture',
  'pie',
  'pie-chart',
  'pig',
  'piggy-bank',
  'pill',
  'pillow',
  'pin',
  'pine-tree',
  'pizza',
  'plant-pot',
  'play',
  'play-circle',
  'playground',
  'playing-cards',
  'playlist',
  'pleading',
  'pliers',
  'plug',
  'plus',
  'plus-circle',
  'podium',
  'police-station',
  'popcorn',
  'port',
  'post-office',
  'postcard',
  'power',
  'power-bank',
  'presentation',
  'printer',
  'projector',
  'pulse-oximeter',
  'qr-code',
  'quote',
  'rabbit',
  'radio',
  'railway-crossing',
  'rain',
  'rainbow',
  'range-hood',
  'receipt',
  'redo',
  'refresh',
  'refrigerator',
  'refund',
  'relieved',
  'replace',
  'reply',
  'restaurant',
  'rewind',
  'rice',
  'rice-cooker',
  'rocket',
  'roll-eyes',
  'route',
  'router',
  'rowing',
  'rows',
  'rss',
  'rubber-stamp',
  'rugby',
  'ruler',
  'running',
  'sad',
  'safe',
  'sailboat',
  'salad',
  'sandwich',
  'satellite',
  'save',
  'saw',
  'scale',
  'scalpel',
  'scan',
  'scanner',
  'school',
  'scissors',
  'scooter',
  'scoreboard',
  'screwdriver',
  'sd-card',
  'search',
  'security-camera',
  'seedling',
  'segway',
  'select-all',
  'send',
  'server',
  'settings',
  'share',
  'sheep',
  'shield',
  'shield-alert',
  'shield-check',
  'ship',
  'shirt',
  'shopping-bag',
  'shopping-cart',
  'shovel',
  'shower',
  'shredder',
  'shuffle',
  'shush',
  'shy',
  'sidebar',
  'signal',
  'signpost',
  'sink',
  'siren',
  'skateboard',
  'ski',
  'skip-back',
  'skip-forward',
  'sleepy',
  'sliders',
  'smartphone',
  'smartwatch',
  'smile',
  'smirk',
  'snail',
  'snake',
  'snowboard',
  'snowflake',
  'soap',
  'soccer',
  'sofa',
  'solar-panel',
  'sort',
  'soup',
  'sparkles',
  'speaker',
  'spider',
  'spinner',
  'sponge',
  'spoon',
  'square',
  'stadium',
  'stairs',
  'stapler',
  'star',
  'starfish',
  'stethoscope',
  'sticky-note',
  'stop',
  'stop-circle',
  'stop-sign',
  'stopwatch',
  'store',
  'strawberry',
  'strikethrough',
  'subway',
  'suitcase',
  'sun',
  'surfboard',
  'surprised',
  'swan',
  'swimming',
  'swimming-pool',
  'syringe',
  'table',
  'table-tennis',
  'tablet',
  'tag',
  'tape-measure',
  'tax',
  'taxi',
  'tea',
  'temple',
  'tennis',
  'tent',
  'terminal',
  'text-align',
  'thermometer',
  'thinking',
  'three-d-printer',
  'thumbs-down',
  'thumbs-up',
  'ticket',
  'timer',
  'timesheet',
  'toaster',
  'toggle-left',
  'toggle-right',
  'toilet',
  'tomato',
  'tongue-out',
  'toolbox',
  'tooth',
  'towel',
  'traffic-cone',
  'traffic-light',
  'train',
  'train-station',
  'tram',
  'trash',
  'treadmill',
  'tree',
  'trending-up',
  'tripod',
  'trophy',
  'truck',
  'tunnel',
  'turn-left',
  'turn-right',
  'tv',
  'tv-remote',
  'u-turn',
  'umbrella',
  'underline',
  'undo',
  'unlink',
  'upload',
  'usb',
  'user',
  'user-check',
  'user-circle',
  'user-minus',
  'user-plus',
  'user-x',
  'users',
  'utility-knife',
  'vacuum-cleaner',
  'van',
  'video',
  'video-off',
  'virus',
  'voicemail',
  'volcano',
  'volleyball',
  'volume',
  'volume-1',
  'volume-2',
  'volume-x',
  'vr-headset',
  'waffle',
  'walker',
  'walkie-talkie',
  'wallet',
  'warehouse',
  'washing-machine',
  'watch',
  'water-cup',
  'water-heater',
  'watering-can',
  'watermelon',
  'waypoint',
  'webcam',
  'wheelchair',
  'whisk',
  'whistle',
  'whiteboard',
  'whiteboard-eraser',
  'wifi',
  'wifi-off',
  'wind',
  'window',
  'wine',
  'wink',
  'worried',
  'wrench',
  'x-circle',
  'x-ray',
  'yield-sign',
  'yoga',
  'zoo',
  'zoom-in',
  'zoom-out',
] as const;

/** 所有内置图标的 id 类型，与 iconNames 一一对应 */
export type IconId = (typeof iconNames)[number];

/** 所有内置图标的组件名类型 */
export type IconName =
  | 'AcornIcon'
  | 'ActivityIcon'
  | 'AirConditionerIcon'
  | 'AirFryerIcon'
  | 'AirplaneIcon'
  | 'AirportIcon'
  | 'AlarmClockIcon'
  | 'AlertCircleIcon'
  | 'AlertTriangleIcon'
  | 'AmbulanceIcon'
  | 'AnchorIcon'
  | 'AngelIcon'
  | 'AngryIcon'
  | 'AnvilIcon'
  | 'ApartmentIcon'
  | 'AppleIcon'
  | 'ArcheryIcon'
  | 'ArchiveIcon'
  | 'ArrowDownCircleIcon'
  | 'ArrowDownIcon'
  | 'ArrowDownLeftIcon'
  | 'ArrowDownRightIcon'
  | 'ArrowJumpIcon'
  | 'ArrowLeftCircleIcon'
  | 'ArrowLeftIcon'
  | 'ArrowLeftRightIcon'
  | 'ArrowRightCircleIcon'
  | 'ArrowRightIcon'
  | 'ArrowUpCircleIcon'
  | 'ArrowUpDownIcon'
  | 'ArrowUpIcon'
  | 'ArrowUpLeftIcon'
  | 'ArrowUpRightIcon'
  | 'AtSignIcon'
  | 'AtmIcon'
  | 'AudioLinesIcon'
  | 'AuditIcon'
  | 'AvocadoIcon'
  | 'AxeIcon'
  | 'BabyBottleIcon'
  | 'BackpackIcon'
  | 'BaconIcon'
  | 'BadgeCheckIcon'
  | 'BadmintonIcon'
  | 'BalloonIcon'
  | 'BanIcon'
  | 'BandageIcon'
  | 'BankIcon'
  | 'BanknoteIcon'
  | 'BarChartIcon'
  | 'BarberIcon'
  | 'BarcodeIcon'
  | 'BarnIcon'
  | 'BarrierIcon'
  | 'BaseballIcon'
  | 'BasketIcon'
  | 'BasketballIcon'
  | 'BatIcon'
  | 'BathtubIcon'
  | 'BatteryIcon'
  | 'BearIcon'
  | 'BedIcon'
  | 'BeeIcon'
  | 'BeerIcon'
  | 'BellIcon'
  | 'BellOffIcon'
  | 'BellRingIcon'
  | 'BicycleIcon'
  | 'BinderIcon'
  | 'BirdIcon'
  | 'BlanketIcon'
  | 'BlenderIcon'
  | 'BluetoothIcon'
  | 'BlushIcon'
  | 'BoldIcon'
  | 'BoltIcon'
  | 'BoneIcon'
  | 'BookIcon'
  | 'BookOpenIcon'
  | 'BookmarkIcon'
  | 'BowlingIcon'
  | 'BoxingGloveIcon'
  | 'BracesIcon'
  | 'BrainIcon'
  | 'BreadIcon'
  | 'BriefcaseIcon'
  | 'BroccoliIcon'
  | 'BubbleTeaIcon'
  | 'BucketIcon'
  | 'BudgetIcon'
  | 'BuildingIcon'
  | 'BulbIcon'
  | 'BurgerIcon'
  | 'BusIcon'
  | 'BusStopIcon'
  | 'BusinessCardIcon'
  | 'ButterflyIcon'
  | 'CableCarIcon'
  | 'CactusIcon'
  | 'CafeIcon'
  | 'CakeIcon'
  | 'CalculatorIcon'
  | 'CalendarCheckIcon'
  | 'CalendarIcon'
  | 'CameraIcon'
  | 'CandleIcon'
  | 'CandlestickChartIcon'
  | 'CandyIcon'
  | 'CaptionsIcon'
  | 'CarIcon'
  | 'CargoShipIcon'
  | 'CarrotIcon'
  | 'CartIcon'
  | 'CashRegisterIcon'
  | 'CastleIcon'
  | 'CatIcon'
  | 'ChargerIcon'
  | 'ChargingStationIcon'
  | 'ChatIcon'
  | 'CheckCircleIcon'
  | 'CheckIcon'
  | 'CheckSquareIcon'
  | 'CherryIcon'
  | 'ChevronDownIcon'
  | 'ChevronLeftIcon'
  | 'ChevronRightIcon'
  | 'ChevronUpIcon'
  | 'ChickenIcon'
  | 'ChiselIcon'
  | 'ChocolateIcon'
  | 'ChopsticksIcon'
  | 'ChurchIcon'
  | 'CinemaIcon'
  | 'CircleDotIcon'
  | 'CircleIcon'
  | 'ClampIcon'
  | 'ClapperboardIcon'
  | 'ClipboardCheckIcon'
  | 'ClipboardIcon'
  | 'ClockIcon'
  | 'CloseIcon'
  | 'CloudDownloadIcon'
  | 'CloudIcon'
  | 'CloudLightningIcon'
  | 'CloudOffIcon'
  | 'CloudUploadIcon'
  | 'CocktailIcon'
  | 'CodeIcon'
  | 'CoffeeCupIcon'
  | 'CoffeeIcon'
  | 'CoffeeMachineIcon'
  | 'CoinIcon'
  | 'CommandIcon'
  | 'CompassIcon'
  | 'ConfusedIcon'
  | 'CookieIcon'
  | 'CoolIcon'
  | 'CopyIcon'
  | 'CottonSwabIcon'
  | 'CourthouseIcon'
  | 'CowIcon'
  | 'CpuIcon'
  | 'CrabIcon'
  | 'CraneIcon'
  | 'CreditCardIcon'
  | 'CropIcon'
  | 'CrosshairIcon'
  | 'CrownIcon'
  | 'CrutchIcon'
  | 'CryIcon'
  | 'CupcakeIcon'
  | 'CurrencyDollarIcon'
  | 'CurrencyEuroIcon'
  | 'CurrencyPoundIcon'
  | 'CurrencyYuanIcon'
  | 'CursorIcon'
  | 'DartsIcon'
  | 'DatabaseIcon'
  | 'DefibrillatorIcon'
  | 'DeskIcon'
  | 'DiamondIcon'
  | 'DiceIcon'
  | 'DishwasherIcon'
  | 'DnaIcon'
  | 'DogIcon'
  | 'DonationIcon'
  | 'DonutIcon'
  | 'DoorIcon'
  | 'DownloadIcon'
  | 'DragonflyIcon'
  | 'DrillIcon'
  | 'DrizzleIcon'
  | 'DroneIcon'
  | 'DropletIcon'
  | 'DuckIcon'
  | 'DumbbellIcon'
  | 'DumplingIcon'
  | 'EarIcon'
  | 'EclipseIcon'
  | 'EditIcon'
  | 'EggIcon'
  | 'ElephantIcon'
  | 'ElevatorIcon'
  | 'EllipsisIcon'
  | 'ExcavatorIcon'
  | 'ExchangeIcon'
  | 'ExpandIcon'
  | 'ExternalLinkIcon'
  | 'EyeChartIcon'
  | 'EyeIcon'
  | 'EyeOffIcon'
  | 'FactoryIcon'
  | 'FanIcon'
  | 'FastForwardIcon'
  | 'FenceIcon'
  | 'FerryIcon'
  | 'FileAudioIcon'
  | 'FileCabinetIcon'
  | 'FileCheckIcon'
  | 'FileCodeIcon'
  | 'FileIcon'
  | 'FileImageIcon'
  | 'FileLockIcon'
  | 'FilePlusIcon'
  | 'FileQuestionIcon'
  | 'FileSpreadsheetIcon'
  | 'FileTextIcon'
  | 'FileVideoIcon'
  | 'FileXIcon'
  | 'FilesIcon'
  | 'FilmIcon'
  | 'FilterIcon'
  | 'FireExtinguisherIcon'
  | 'FireStationIcon'
  | 'FireTruckIcon'
  | 'FirstAidIcon'
  | 'FishIcon'
  | 'FishingIcon'
  | 'FlagIcon'
  | 'FlameIcon'
  | 'FlashlightIcon'
  | 'FlaskIcon'
  | 'FlowerIcon'
  | 'FogIcon'
  | 'FolderCheckIcon'
  | 'FolderIcon'
  | 'FolderMinusIcon'
  | 'FolderOpenIcon'
  | 'FolderPlusIcon'
  | 'ForestIcon'
  | 'ForkIcon'
  | 'ForkliftIcon'
  | 'ForwardIcon'
  | 'FoxIcon'
  | 'FriedEggIcon'
  | 'FriesIcon'
  | 'FrogIcon'
  | 'FrownIcon'
  | 'GamepadIcon'
  | 'GasStationIcon'
  | 'GiftIcon'
  | 'GiraffeIcon'
  | 'GitBranchIcon'
  | 'GlassesIcon'
  | 'GlobeIcon'
  | 'GoatIcon'
  | 'GolfIcon'
  | 'GoogleChromeIcon'
  | 'GraduationCapIcon'
  | 'GrapeIcon'
  | 'GridIcon'
  | 'GripIcon'
  | 'GymIcon'
  | 'HailIcon'
  | 'HairDryerIcon'
  | 'HammerIcon'
  | 'HangerIcon'
  | 'HardDriveIcon'
  | 'HashIcon'
  | 'HeadphonesIcon'
  | 'HearingAidIcon'
  | 'HeartEyesIcon'
  | 'HeartIcon'
  | 'HeartPulseIcon'
  | 'HelicopterIcon'
  | 'HelpCircleIcon'
  | 'HighlighterIcon'
  | 'HikingIcon'
  | 'HolePunchIcon'
  | 'HomeIcon'
  | 'HoneyIcon'
  | 'HospitalBedIcon'
  | 'HospitalIcon'
  | 'HotelIcon'
  | 'HotpotIcon'
  | 'HourglassIcon'
  | 'HumidifierIcon'
  | 'IcecreamIcon'
  | 'IdCardIcon'
  | 'ImageIcon'
  | 'InboxIcon'
  | 'IndentIcon'
  | 'InfoIcon'
  | 'InvoiceIcon'
  | 'IronIcon'
  | 'ItalicIcon'
  | 'IvDripIcon'
  | 'JackhammerIcon'
  | 'JellyfishIcon'
  | 'JoystickIcon'
  | 'JuiceIcon'
  | 'KanbanIcon'
  | 'KettleIcon'
  | 'KettlebellIcon'
  | 'KeyIcon'
  | 'KeyboardIcon'
  | 'KissIcon'
  | 'KoalaIcon'
  | 'LabelMakerIcon'
  | 'LadderIcon'
  | 'LadybugIcon'
  | 'LampIcon'
  | 'LaptopIcon'
  | 'LaughIcon'
  | 'LayersIcon'
  | 'LayoutDashboardIcon'
  | 'LeafIcon'
  | 'LedgerIcon'
  | 'LemonIcon'
  | 'LevelIcon'
  | 'LibraryIcon'
  | 'LighthouseIcon'
  | 'LineChartIcon'
  | 'LinkIcon'
  | 'LionIcon'
  | 'LipstickIcon'
  | 'ListCheckIcon'
  | 'ListIcon'
  | 'ListPlusIcon'
  | 'LoanIcon'
  | 'LobsterIcon'
  | 'LocateIcon'
  | 'LocationIcon'
  | 'LocationOffIcon'
  | 'LockIcon'
  | 'LockOpenIcon'
  | 'LoginIcon'
  | 'LogoutIcon'
  | 'LollipopIcon'
  | 'LuggageIcon'
  | 'LungsIcon'
  | 'MagazineIcon'
  | 'MagnetIcon'
  | 'MailCheckIcon'
  | 'MailIcon'
  | 'MailLockIcon'
  | 'MailMinusIcon'
  | 'MailOpenIcon'
  | 'MailPlusIcon'
  | 'MailQuestionIcon'
  | 'MapIcon'
  | 'MapPinIcon'
  | 'MarkerIcon'
  | 'MaximizeIcon'
  | 'MedalIcon'
  | 'MedicalGloveIcon'
  | 'MedicalMaskIcon'
  | 'MedicineBottleIcon'
  | 'MegaphoneIcon'
  | 'MenuIcon'
  | 'MessageCircleIcon'
  | 'MessageSquareDotsIcon'
  | 'MessageSquareIcon'
  | 'MessageSquarePlusIcon'
  | 'MessagesIcon'
  | 'MicIcon'
  | 'MicOffIcon'
  | 'MicroscopeIcon'
  | 'MicrowaveIcon'
  | 'MilestoneIcon'
  | 'MilkIcon'
  | 'MinimizeIcon'
  | 'MinusCircleIcon'
  | 'MinusIcon'
  | 'MirrorIcon'
  | 'MoneyMouthIcon'
  | 'MonitorIcon'
  | 'MonkeyIcon'
  | 'MoonIcon'
  | 'MoreVerticalIcon'
  | 'MosqueIcon'
  | 'MotorcycleIcon'
  | 'MountainIcon'
  | 'MouseIcon'
  | 'MoveIcon'
  | 'MuseumIcon'
  | 'MushroomIcon'
  | 'MusicIcon'
  | 'NameTagIcon'
  | 'NavigationIcon'
  | 'NervousIcon'
  | 'NeutralIcon'
  | 'NewspaperIcon'
  | 'NoDataIcon'
  | 'NoEntryIcon'
  | 'NoodleIcon'
  | 'NotebookIcon'
  | 'OctopusIcon'
  | 'OfficeChairIcon'
  | 'OutdentIcon'
  | 'OvenIcon'
  | 'OwlIcon'
  | 'OxygenTankIcon'
  | 'PaintRollerIcon'
  | 'PaintbrushIcon'
  | 'PaletteIcon'
  | 'PaperclipIcon'
  | 'ParachuteIcon'
  | 'ParkIcon'
  | 'ParkingIcon'
  | 'PartyIcon'
  | 'PassportIcon'
  | 'PasteIcon'
  | 'PauseCircleIcon'
  | 'PauseIcon'
  | 'PawPrintIcon'
  | 'PeacockIcon'
  | 'PearIcon'
  | 'PedestrianCrossingIcon'
  | 'PenHolderIcon'
  | 'PencilIcon'
  | 'PenguinIcon'
  | 'PercentIcon'
  | 'PharmacyIcon'
  | 'PhoneIcon'
  | 'PhoneIncomingIcon'
  | 'PhoneMissedIcon'
  | 'PhoneOffIcon'
  | 'PhoneOutgoingIcon'
  | 'PickaxeIcon'
  | 'PickupTruckIcon'
  | 'PictureInPictureIcon'
  | 'PieChartIcon'
  | 'PieIcon'
  | 'PigIcon'
  | 'PiggyBankIcon'
  | 'PillIcon'
  | 'PillowIcon'
  | 'PinIcon'
  | 'PineTreeIcon'
  | 'PizzaIcon'
  | 'PlantPotIcon'
  | 'PlayCircleIcon'
  | 'PlayIcon'
  | 'PlaygroundIcon'
  | 'PlayingCardsIcon'
  | 'PlaylistIcon'
  | 'PleadingIcon'
  | 'PliersIcon'
  | 'PlugIcon'
  | 'PlusCircleIcon'
  | 'PlusIcon'
  | 'PodiumIcon'
  | 'PoliceStationIcon'
  | 'PopcornIcon'
  | 'PortIcon'
  | 'PostOfficeIcon'
  | 'PostcardIcon'
  | 'PowerBankIcon'
  | 'PowerIcon'
  | 'PresentationIcon'
  | 'PrinterIcon'
  | 'ProjectorIcon'
  | 'PulseOximeterIcon'
  | 'QrCodeIcon'
  | 'QuoteIcon'
  | 'RabbitIcon'
  | 'RadioIcon'
  | 'RailwayCrossingIcon'
  | 'RainIcon'
  | 'RainbowIcon'
  | 'RangeHoodIcon'
  | 'ReceiptIcon'
  | 'RedoIcon'
  | 'RefreshIcon'
  | 'RefrigeratorIcon'
  | 'RefundIcon'
  | 'RelievedIcon'
  | 'ReplaceIcon'
  | 'ReplyIcon'
  | 'RestaurantIcon'
  | 'RewindIcon'
  | 'RiceCookerIcon'
  | 'RiceIcon'
  | 'RocketIcon'
  | 'RollEyesIcon'
  | 'RouteIcon'
  | 'RouterIcon'
  | 'RowingIcon'
  | 'RowsIcon'
  | 'RssIcon'
  | 'RubberStampIcon'
  | 'RugbyIcon'
  | 'RulerIcon'
  | 'RunningIcon'
  | 'SadIcon'
  | 'SafeIcon'
  | 'SailboatIcon'
  | 'SaladIcon'
  | 'SandwichIcon'
  | 'SatelliteIcon'
  | 'SaveIcon'
  | 'SawIcon'
  | 'ScaleIcon'
  | 'ScalpelIcon'
  | 'ScanIcon'
  | 'ScannerIcon'
  | 'SchoolIcon'
  | 'ScissorsIcon'
  | 'ScooterIcon'
  | 'ScoreboardIcon'
  | 'ScrewdriverIcon'
  | 'SdCardIcon'
  | 'SearchIcon'
  | 'SecurityCameraIcon'
  | 'SeedlingIcon'
  | 'SegwayIcon'
  | 'SelectAllIcon'
  | 'SendIcon'
  | 'ServerIcon'
  | 'SettingsIcon'
  | 'ShareIcon'
  | 'SheepIcon'
  | 'ShieldAlertIcon'
  | 'ShieldCheckIcon'
  | 'ShieldIcon'
  | 'ShipIcon'
  | 'ShirtIcon'
  | 'ShoppingBagIcon'
  | 'ShoppingCartIcon'
  | 'ShovelIcon'
  | 'ShowerIcon'
  | 'ShredderIcon'
  | 'ShuffleIcon'
  | 'ShushIcon'
  | 'ShyIcon'
  | 'SidebarIcon'
  | 'SignalIcon'
  | 'SignpostIcon'
  | 'SinkIcon'
  | 'SirenIcon'
  | 'SkateboardIcon'
  | 'SkiIcon'
  | 'SkipBackIcon'
  | 'SkipForwardIcon'
  | 'SleepyIcon'
  | 'SlidersIcon'
  | 'SmartphoneIcon'
  | 'SmartwatchIcon'
  | 'SmileIcon'
  | 'SmirkIcon'
  | 'SnailIcon'
  | 'SnakeIcon'
  | 'SnowboardIcon'
  | 'SnowflakeIcon'
  | 'SoapIcon'
  | 'SoccerIcon'
  | 'SofaIcon'
  | 'SolarPanelIcon'
  | 'SortIcon'
  | 'SoupIcon'
  | 'SparklesIcon'
  | 'SpeakerIcon'
  | 'SpiderIcon'
  | 'SpinnerIcon'
  | 'SpongeIcon'
  | 'SpoonIcon'
  | 'SquareIcon'
  | 'StadiumIcon'
  | 'StairsIcon'
  | 'StaplerIcon'
  | 'StarIcon'
  | 'StarfishIcon'
  | 'StethoscopeIcon'
  | 'StickyNoteIcon'
  | 'StopCircleIcon'
  | 'StopIcon'
  | 'StopSignIcon'
  | 'StopwatchIcon'
  | 'StoreIcon'
  | 'StrawberryIcon'
  | 'StrikethroughIcon'
  | 'SubwayIcon'
  | 'SuitcaseIcon'
  | 'SunIcon'
  | 'SurfboardIcon'
  | 'SurprisedIcon'
  | 'SwanIcon'
  | 'SwimmingIcon'
  | 'SwimmingPoolIcon'
  | 'SyringeIcon'
  | 'TableIcon'
  | 'TableTennisIcon'
  | 'TabletIcon'
  | 'TagIcon'
  | 'TapeMeasureIcon'
  | 'TaxIcon'
  | 'TaxiIcon'
  | 'TeaIcon'
  | 'TempleIcon'
  | 'TennisIcon'
  | 'TentIcon'
  | 'TerminalIcon'
  | 'TextAlignIcon'
  | 'ThermometerIcon'
  | 'ThinkingIcon'
  | 'ThreeDPrinterIcon'
  | 'ThumbsDownIcon'
  | 'ThumbsUpIcon'
  | 'TicketIcon'
  | 'TimerIcon'
  | 'TimesheetIcon'
  | 'ToasterIcon'
  | 'ToggleLeftIcon'
  | 'ToggleRightIcon'
  | 'ToiletIcon'
  | 'TomatoIcon'
  | 'TongueOutIcon'
  | 'ToolboxIcon'
  | 'ToothIcon'
  | 'TowelIcon'
  | 'TrafficConeIcon'
  | 'TrafficLightIcon'
  | 'TrainIcon'
  | 'TrainStationIcon'
  | 'TramIcon'
  | 'TrashIcon'
  | 'TreadmillIcon'
  | 'TreeIcon'
  | 'TrendingUpIcon'
  | 'TripodIcon'
  | 'TrophyIcon'
  | 'TruckIcon'
  | 'TunnelIcon'
  | 'TurnLeftIcon'
  | 'TurnRightIcon'
  | 'TvIcon'
  | 'TvRemoteIcon'
  | 'UTurnIcon'
  | 'UmbrellaIcon'
  | 'UnderlineIcon'
  | 'UndoIcon'
  | 'UnlinkIcon'
  | 'UploadIcon'
  | 'UsbIcon'
  | 'UserCheckIcon'
  | 'UserCircleIcon'
  | 'UserIcon'
  | 'UserMinusIcon'
  | 'UserPlusIcon'
  | 'UserXIcon'
  | 'UsersIcon'
  | 'UtilityKnifeIcon'
  | 'VacuumCleanerIcon'
  | 'VanIcon'
  | 'VideoIcon'
  | 'VideoOffIcon'
  | 'VirusIcon'
  | 'VoicemailIcon'
  | 'VolcanoIcon'
  | 'VolleyballIcon'
  | 'Volume1Icon'
  | 'Volume2Icon'
  | 'VolumeIcon'
  | 'VolumeXIcon'
  | 'VrHeadsetIcon'
  | 'WaffleIcon'
  | 'WalkerIcon'
  | 'WalkieTalkieIcon'
  | 'WalletIcon'
  | 'WarehouseIcon'
  | 'WashingMachineIcon'
  | 'WatchIcon'
  | 'WaterCupIcon'
  | 'WaterHeaterIcon'
  | 'WateringCanIcon'
  | 'WatermelonIcon'
  | 'WaypointIcon'
  | 'WebcamIcon'
  | 'WheelchairIcon'
  | 'WhiskIcon'
  | 'WhistleIcon'
  | 'WhiteboardEraserIcon'
  | 'WhiteboardIcon'
  | 'WifiIcon'
  | 'WifiOffIcon'
  | 'WindIcon'
  | 'WindowIcon'
  | 'WineIcon'
  | 'WinkIcon'
  | 'WorriedIcon'
  | 'WrenchIcon'
  | 'XCircleIcon'
  | 'XRayIcon'
  | 'YieldSignIcon'
  | 'YogaIcon'
  | 'ZooIcon'
  | 'ZoomInIcon'
  | 'ZoomOutIcon'
;
