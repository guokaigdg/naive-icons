/**
 * 所有内置图标的 id（kebab-case），运行时数组。
 *
 * IconId 只是纯类型，编译后不存在；需要「按名字动态取图标」时用这个数组，
 * 配合动态 import 别把 936 枚全打进包：
 *
 * import { iconNames } from 'naive-icons-vue';
 *
 * const map = { 'arrow-up-down': () => import('naive-icons-vue/icons/ArrowUpDownIcon').then(m => m.ArrowUpDownIcon) };
 */
export const iconNames = [
  'abacus',
  'acorn',
  'activity',
  'ai-agent',
  'air-conditioner',
  'air-fryer',
  'airplane',
  'airport',
  'alarm-clock',
  'alert-circle',
  'alert-triangle',
  'alien',
  'align-center',
  'align-justify',
  'align-left',
  'align-right',
  'ambulance',
  'amusement-park',
  'anchor',
  'angel',
  'angry',
  'anvil',
  'apartment',
  'apple',
  'aquarium',
  'archery',
  'archive',
  'area-chart',
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
  'bakery',
  'balloon',
  'bamboo',
  'ban',
  'banana',
  'bandage',
  'bank',
  'banknote',
  'bar-chart',
  'barbell',
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
  'bell-pepper',
  'bell-ring',
  'bicycle',
  'binder',
  'binder-clip',
  'binoculars',
  'bird',
  'bitcoin',
  'blanket',
  'blender',
  'blood-pressure',
  'bluetooth',
  'blush',
  'bold',
  'bolt',
  'bone',
  'book',
  'book-open',
  'bookmark',
  'bookmark-check',
  'bookmark-plus',
  'bookshelf',
  'boot',
  'bowling',
  'boxing',
  'braces',
  'brain',
  'bread',
  'bread-maker',
  'breakpoint',
  'bridge',
  'briefcase',
  'broccoli',
  'bubble-tea',
  'bucket',
  'budget',
  'bug',
  'building',
  'bulb',
  'bulldozer',
  'burger',
  'bus',
  'bus-stop',
  'business-card',
  'butterfly',
  'cable-car',
  'cache',
  'cactus',
  'cafe',
  'cake',
  'calculator',
  'calendar',
  'calendar-check',
  'calendar-days',
  'calendar-plus',
  'calendar-x',
  'camera',
  'campfire',
  'candle',
  'candlestick-chart',
  'candy',
  'captions',
  'car',
  'car-wash',
  'cargo-ship',
  'carrot',
  'cart',
  'cash-register',
  'cassette',
  'cast',
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
  'chevrons-down',
  'chevrons-left',
  'chevrons-left-right',
  'chevrons-right',
  'chevrons-up',
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
  'cli',
  'climbing',
  'clipboard',
  'clipboard-check',
  'clipboard-list',
  'clock',
  'close',
  'cloud',
  'cloud-download',
  'cloud-lightning',
  'cloud-moon',
  'cloud-off',
  'cloud-rain',
  'cloud-snow',
  'cloud-sun',
  'cloud-upload',
  'clover',
  'clown',
  'cocktail',
  'code',
  'code-review',
  'coffee',
  'coffee-cup',
  'coffee-grinder',
  'coffee-machine',
  'coin',
  'coins',
  'colander',
  'columns',
  'command',
  'compass',
  'component',
  'config',
  'confused',
  'container',
  'context',
  'cookie',
  'cool',
  'copy',
  'corkscrew',
  'corn',
  'corner-down-left',
  'corner-down-right',
  'corner-up-left',
  'corner-up-right',
  'cottage',
  'cotton-swab',
  'coupon',
  'courthouse',
  'cow',
  'cpu',
  'crab',
  'crane',
  'crayon',
  'credit-card',
  'cricket',
  'crocodile',
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
  'cursor-text',
  'curtain',
  'cutting-board',
  'darts',
  'database',
  'defibrillator',
  'dentist',
  'desk',
  'diamond',
  'dice',
  'dishwasher',
  'dizzy',
  'dna',
  'dog',
  'domino',
  'donation',
  'donut',
  'door',
  'download',
  'dragonfly',
  'dress',
  'drill',
  'drizzle',
  'drone',
  'droplet',
  'drum',
  'duck',
  'dumbbell',
  'dumpling',
  'ear',
  'earbuds',
  'eclipse',
  'edit',
  'egg',
  'eggplant',
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
  'feather',
  'fence',
  'fencing',
  'ferry',
  'fighter-jet',
  'file',
  'file-audio',
  'file-cabinet',
  'file-check',
  'file-clock',
  'file-code',
  'file-image',
  'file-lock',
  'file-minus',
  'file-pdf',
  'file-plus',
  'file-question',
  'file-search',
  'file-spreadsheet',
  'file-text',
  'file-video',
  'file-x',
  'file-zip',
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
  'flag-check',
  'flag-off',
  'flame',
  'flashlight',
  'flask',
  'floppy-disk',
  'florist',
  'flower',
  'fog',
  'folder',
  'folder-check',
  'folder-lock',
  'folder-minus',
  'folder-open',
  'folder-plus',
  'folder-x',
  'food-processor',
  'forest',
  'fork',
  'forklift',
  'forward',
  'fountain-pen',
  'fox',
  'fried-egg',
  'fries',
  'frog',
  'frown',
  'frying-pan',
  'gallery',
  'game-console',
  'gamepad',
  'garbage-truck',
  'gas-station',
  'gauge',
  'generate',
  'ghost',
  'gift',
  'giraffe',
  'git-branch',
  'glasses',
  'globe',
  'glucose-meter',
  'goat',
  'golf',
  'google-chrome',
  'gpu',
  'graduation-cap',
  'grape',
  'grater',
  'grid',
  'grip',
  'grip-vertical',
  'guitar',
  'gym',
  'gymnastic-rings',
  'hail',
  'hair-dryer',
  'hammer',
  'hanger',
  'hard-drive',
  'hash',
  'hat',
  'headphones',
  'headset',
  'hearing-aid',
  'heart',
  'heart-crack',
  'heart-eyes',
  'heart-pulse',
  'helicopter',
  'helmet',
  'help-circle',
  'highlighter',
  'hiking',
  'hole-punch',
  'home',
  'honey',
  'hospital',
  'hospital-bed',
  'hot-air-balloon',
  'hotdog',
  'hotel',
  'hotpot',
  'hourglass',
  'humidifier',
  'ice-skates',
  'icecream',
  'id-card',
  'image',
  'image-off',
  'image-plus',
  'images',
  'inbox',
  'indent',
  'info',
  'ink-bottle',
  'invoice',
  'iron',
  'italic',
  'iv-drip',
  'jackhammer',
  'jellyfish',
  'joystick',
  'juice',
  'juicer',
  'jump-rope',
  'kanban',
  'kebab',
  'kettle',
  'kettlebell',
  'key',
  'keyboard',
  'kiss',
  'kite',
  'knife',
  'koala',
  'label-maker',
  'ladder',
  'ladybug',
  'lamp',
  'lantern',
  'laptop',
  'laugh',
  'laundry',
  'layers',
  'layout-dashboard',
  'layout-template',
  'leaf',
  'ledger',
  'lemon',
  'letter-tray',
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
  'llm',
  'loan',
  'lobster',
  'localhost',
  'locate',
  'location',
  'location-off',
  'lock',
  'lock-open',
  'login',
  'logout',
  'lollipop',
  'luggage',
  'lunchbox',
  'lungs',
  'macaron',
  'magazine',
  'magnet',
  'mail',
  'mail-check',
  'mail-lock',
  'mail-minus',
  'mail-open',
  'mail-plus',
  'mail-question',
  'mail-x',
  'mango',
  'map',
  'map-pin',
  'map-pin-check',
  'map-pin-off',
  'map-pin-plus',
  'marker',
  'market',
  'maximize',
  'medal',
  'medical-glove',
  'medical-mask',
  'medical-record',
  'medicine-bottle',
  'megaphone',
  'menu',
  'message-circle',
  'message-circle-plus',
  'message-square',
  'message-square-dots',
  'message-square-plus',
  'message-square-text',
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
  'moon-star',
  'more-horizontal',
  'more-vertical',
  'mosque',
  'motorcycle',
  'mountain',
  'mouse',
  'move',
  'multimeter',
  'museum',
  'mushroom',
  'music',
  'nail',
  'name-tag',
  'navigation',
  'nerd',
  'nervous',
  'net',
  'neutral',
  'newspaper',
  'no-data',
  'no-entry',
  'noodle',
  'notebook',
  'nut-bolt',
  'octopus',
  'office-chair',
  'orange',
  'outdent',
  'oven',
  'owl',
  'oxygen-tank',
  'paint-roller',
  'paintbrush',
  'palette',
  'pancake',
  'panel-bottom',
  'panel-right',
  'panel-top',
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
  'peach',
  'peacock',
  'pear',
  'pedestrian-crossing',
  'pen-holder',
  'pencil',
  'penguin',
  'percent',
  'perfume',
  'petri-dish',
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
  'plunger',
  'plus',
  'plus-circle',
  'podium',
  'police-station',
  'popcorn',
  'port',
  'post-office',
  'postage-stamp',
  'postcard',
  'potato',
  'power',
  'power-bank',
  'power-plant',
  'presentation',
  'printer',
  'projector',
  'prompt',
  'pulse-oximeter',
  'pumpkin',
  'puzzle',
  'qr-code',
  'queue',
  'quote',
  'rabbit',
  'radio',
  'radio-tower',
  'railway-crossing',
  'rain',
  'rainbow',
  'ram',
  'range-hood',
  'raspberry',
  'razor',
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
  'robot',
  'rocket',
  'roll-eyes',
  'rope',
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
  'safety-goggles',
  'sailboat',
  'salad',
  'salt-shaker',
  'sandwich',
  'sanitizer',
  'satellite',
  'satellite-dish',
  'save',
  'saw',
  'scale',
  'scalpel',
  'scan',
  'scanner',
  'scarf',
  'scatter-chart',
  'school',
  'scissors',
  'scooter',
  'scoreboard',
  'scream',
  'screen-share',
  'screw',
  'screwdriver',
  'sd-card',
  'search',
  'security-camera',
  'seedling',
  'segway',
  'select-all',
  'send',
  'server',
  'service-bell',
  'settings',
  'sewing-machine',
  'share',
  'sheep',
  'shield',
  'shield-alert',
  'shield-check',
  'shield-off',
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
  'sick',
  'sidebar',
  'signal',
  'signature',
  'signpost',
  'sink',
  'siren',
  'skateboard',
  'ski',
  'skip-back',
  'skip-forward',
  'skull',
  'skyscraper',
  'sleepy',
  'sliders',
  'sliders-vertical',
  'smartphone',
  'smartwatch',
  'smile',
  'smirk',
  'snail',
  'snake',
  'snow-globe',
  'snowboard',
  'snowflake',
  'soap',
  'soccer',
  'sock',
  'soda',
  'sofa',
  'solar-panel',
  'sort',
  'sort-asc',
  'sort-desc',
  'soup',
  'space-heater',
  'space-shuttle',
  'sparkles',
  'spatula',
  'speaker',
  'spider',
  'spinner',
  'sponge',
  'spoon',
  'square',
  'squid',
  'stadium',
  'stairs',
  'stamp-pad',
  'stapler',
  'star',
  'star-eyes',
  'star-half',
  'starfish',
  'steak',
  'stethoscope',
  'sticky-note',
  'stock-ticker',
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
  'sunflower',
  'sunglasses',
  'sunrise',
  'sunset',
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
  'tags',
  'tape-measure',
  'tax',
  'taxi',
  'tea',
  'telescope',
  'temple',
  'tennis',
  'tent',
  'terminal',
  'test-tube',
  'text-align',
  'thermometer',
  'thermos',
  'thinking',
  'three-d-printer',
  'thumbs-down',
  'thumbs-up',
  'ticket',
  'timer',
  'timesheet',
  'tissue-box',
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
  'trowel',
  'truck',
  'trumpet',
  'tunnel',
  'turn-left',
  'turn-right',
  'turtle',
  'tv',
  'tv-remote',
  'type',
  'u-turn',
  'ufo',
  'umbrella',
  'underline',
  'undo',
  'university',
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
  'vaccine-vial',
  'vacuum-cleaner',
  'van',
  'video',
  'video-off',
  'video-plus',
  'vinyl',
  'virus',
  'voice-prompt',
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
  'water-tower',
  'watering-can',
  'watermelon',
  'waypoint',
  'webcam',
  'whale',
  'wheat',
  'wheelchair',
  'whisk',
  'whistle',
  'whiteboard',
  'whiteboard-eraser',
  'wifi',
  'wifi-off',
  'wind',
  'windmill',
  'window',
  'wine',
  'wink',
  'worried',
  'wrench',
  'x-circle',
  'x-ray',
  'yacht',
  'yield-sign',
  'yoga',
  'yoyo',
  'zoo',
  'zoom-in',
  'zoom-out',
] as const;

/** 所有内置图标的 id 类型，与 iconNames 一一对应 */
export type IconId = (typeof iconNames)[number];

/** 所有内置图标的组件名类型 */
export type IconName =
  | 'AbacusIcon'
  | 'AcornIcon'
  | 'ActivityIcon'
  | 'AiAgentIcon'
  | 'AirConditionerIcon'
  | 'AirFryerIcon'
  | 'AirplaneIcon'
  | 'AirportIcon'
  | 'AlarmClockIcon'
  | 'AlertCircleIcon'
  | 'AlertTriangleIcon'
  | 'AlienIcon'
  | 'AlignCenterIcon'
  | 'AlignJustifyIcon'
  | 'AlignLeftIcon'
  | 'AlignRightIcon'
  | 'AmbulanceIcon'
  | 'AmusementParkIcon'
  | 'AnchorIcon'
  | 'AngelIcon'
  | 'AngryIcon'
  | 'AnvilIcon'
  | 'ApartmentIcon'
  | 'AppleIcon'
  | 'AquariumIcon'
  | 'ArcheryIcon'
  | 'ArchiveIcon'
  | 'AreaChartIcon'
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
  | 'BakeryIcon'
  | 'BalloonIcon'
  | 'BambooIcon'
  | 'BanIcon'
  | 'BananaIcon'
  | 'BandageIcon'
  | 'BankIcon'
  | 'BanknoteIcon'
  | 'BarChartIcon'
  | 'BarbellIcon'
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
  | 'BellPepperIcon'
  | 'BellRingIcon'
  | 'BicycleIcon'
  | 'BinderClipIcon'
  | 'BinderIcon'
  | 'BinocularsIcon'
  | 'BirdIcon'
  | 'BitcoinIcon'
  | 'BlanketIcon'
  | 'BlenderIcon'
  | 'BloodPressureIcon'
  | 'BluetoothIcon'
  | 'BlushIcon'
  | 'BoldIcon'
  | 'BoltIcon'
  | 'BoneIcon'
  | 'BookIcon'
  | 'BookOpenIcon'
  | 'BookmarkCheckIcon'
  | 'BookmarkIcon'
  | 'BookmarkPlusIcon'
  | 'BookshelfIcon'
  | 'BootIcon'
  | 'BowlingIcon'
  | 'BoxingIcon'
  | 'BracesIcon'
  | 'BrainIcon'
  | 'BreadIcon'
  | 'BreadMakerIcon'
  | 'BreakpointIcon'
  | 'BridgeIcon'
  | 'BriefcaseIcon'
  | 'BroccoliIcon'
  | 'BubbleTeaIcon'
  | 'BucketIcon'
  | 'BudgetIcon'
  | 'BugIcon'
  | 'BuildingIcon'
  | 'BulbIcon'
  | 'BulldozerIcon'
  | 'BurgerIcon'
  | 'BusIcon'
  | 'BusStopIcon'
  | 'BusinessCardIcon'
  | 'ButterflyIcon'
  | 'CableCarIcon'
  | 'CacheIcon'
  | 'CactusIcon'
  | 'CafeIcon'
  | 'CakeIcon'
  | 'CalculatorIcon'
  | 'CalendarCheckIcon'
  | 'CalendarDaysIcon'
  | 'CalendarIcon'
  | 'CalendarPlusIcon'
  | 'CalendarXIcon'
  | 'CameraIcon'
  | 'CampfireIcon'
  | 'CandleIcon'
  | 'CandlestickChartIcon'
  | 'CandyIcon'
  | 'CaptionsIcon'
  | 'CarIcon'
  | 'CarWashIcon'
  | 'CargoShipIcon'
  | 'CarrotIcon'
  | 'CartIcon'
  | 'CashRegisterIcon'
  | 'CassetteIcon'
  | 'CastIcon'
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
  | 'ChevronsDownIcon'
  | 'ChevronsLeftIcon'
  | 'ChevronsLeftRightIcon'
  | 'ChevronsRightIcon'
  | 'ChevronsUpIcon'
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
  | 'CliIcon'
  | 'ClimbingIcon'
  | 'ClipboardCheckIcon'
  | 'ClipboardIcon'
  | 'ClipboardListIcon'
  | 'ClockIcon'
  | 'CloseIcon'
  | 'CloudDownloadIcon'
  | 'CloudIcon'
  | 'CloudLightningIcon'
  | 'CloudMoonIcon'
  | 'CloudOffIcon'
  | 'CloudRainIcon'
  | 'CloudSnowIcon'
  | 'CloudSunIcon'
  | 'CloudUploadIcon'
  | 'CloverIcon'
  | 'ClownIcon'
  | 'CocktailIcon'
  | 'CodeIcon'
  | 'CodeReviewIcon'
  | 'CoffeeCupIcon'
  | 'CoffeeGrinderIcon'
  | 'CoffeeIcon'
  | 'CoffeeMachineIcon'
  | 'CoinIcon'
  | 'CoinsIcon'
  | 'ColanderIcon'
  | 'ColumnsIcon'
  | 'CommandIcon'
  | 'CompassIcon'
  | 'ComponentIcon'
  | 'ConfigIcon'
  | 'ConfusedIcon'
  | 'ContainerIcon'
  | 'ContextIcon'
  | 'CookieIcon'
  | 'CoolIcon'
  | 'CopyIcon'
  | 'CorkscrewIcon'
  | 'CornIcon'
  | 'CornerDownLeftIcon'
  | 'CornerDownRightIcon'
  | 'CornerUpLeftIcon'
  | 'CornerUpRightIcon'
  | 'CottageIcon'
  | 'CottonSwabIcon'
  | 'CouponIcon'
  | 'CourthouseIcon'
  | 'CowIcon'
  | 'CpuIcon'
  | 'CrabIcon'
  | 'CraneIcon'
  | 'CrayonIcon'
  | 'CreditCardIcon'
  | 'CricketIcon'
  | 'CrocodileIcon'
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
  | 'CursorTextIcon'
  | 'CurtainIcon'
  | 'CuttingBoardIcon'
  | 'DartsIcon'
  | 'DatabaseIcon'
  | 'DefibrillatorIcon'
  | 'DentistIcon'
  | 'DeskIcon'
  | 'DiamondIcon'
  | 'DiceIcon'
  | 'DishwasherIcon'
  | 'DizzyIcon'
  | 'DnaIcon'
  | 'DogIcon'
  | 'DominoIcon'
  | 'DonationIcon'
  | 'DonutIcon'
  | 'DoorIcon'
  | 'DownloadIcon'
  | 'DragonflyIcon'
  | 'DressIcon'
  | 'DrillIcon'
  | 'DrizzleIcon'
  | 'DroneIcon'
  | 'DropletIcon'
  | 'DrumIcon'
  | 'DuckIcon'
  | 'DumbbellIcon'
  | 'DumplingIcon'
  | 'EarIcon'
  | 'EarbudsIcon'
  | 'EclipseIcon'
  | 'EditIcon'
  | 'EggIcon'
  | 'EggplantIcon'
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
  | 'FeatherIcon'
  | 'FenceIcon'
  | 'FencingIcon'
  | 'FerryIcon'
  | 'FighterJetIcon'
  | 'FileAudioIcon'
  | 'FileCabinetIcon'
  | 'FileCheckIcon'
  | 'FileClockIcon'
  | 'FileCodeIcon'
  | 'FileIcon'
  | 'FileImageIcon'
  | 'FileLockIcon'
  | 'FileMinusIcon'
  | 'FilePdfIcon'
  | 'FilePlusIcon'
  | 'FileQuestionIcon'
  | 'FileSearchIcon'
  | 'FileSpreadsheetIcon'
  | 'FileTextIcon'
  | 'FileVideoIcon'
  | 'FileXIcon'
  | 'FileZipIcon'
  | 'FilesIcon'
  | 'FilmIcon'
  | 'FilterIcon'
  | 'FireExtinguisherIcon'
  | 'FireStationIcon'
  | 'FireTruckIcon'
  | 'FirstAidIcon'
  | 'FishIcon'
  | 'FishingIcon'
  | 'FlagCheckIcon'
  | 'FlagIcon'
  | 'FlagOffIcon'
  | 'FlameIcon'
  | 'FlashlightIcon'
  | 'FlaskIcon'
  | 'FloppyDiskIcon'
  | 'FloristIcon'
  | 'FlowerIcon'
  | 'FogIcon'
  | 'FolderCheckIcon'
  | 'FolderIcon'
  | 'FolderLockIcon'
  | 'FolderMinusIcon'
  | 'FolderOpenIcon'
  | 'FolderPlusIcon'
  | 'FolderXIcon'
  | 'FoodProcessorIcon'
  | 'ForestIcon'
  | 'ForkIcon'
  | 'ForkliftIcon'
  | 'ForwardIcon'
  | 'FountainPenIcon'
  | 'FoxIcon'
  | 'FriedEggIcon'
  | 'FriesIcon'
  | 'FrogIcon'
  | 'FrownIcon'
  | 'FryingPanIcon'
  | 'GalleryIcon'
  | 'GameConsoleIcon'
  | 'GamepadIcon'
  | 'GarbageTruckIcon'
  | 'GasStationIcon'
  | 'GaugeIcon'
  | 'GenerateIcon'
  | 'GhostIcon'
  | 'GiftIcon'
  | 'GiraffeIcon'
  | 'GitBranchIcon'
  | 'GlassesIcon'
  | 'GlobeIcon'
  | 'GlucoseMeterIcon'
  | 'GoatIcon'
  | 'GolfIcon'
  | 'GoogleChromeIcon'
  | 'GpuIcon'
  | 'GraduationCapIcon'
  | 'GrapeIcon'
  | 'GraterIcon'
  | 'GridIcon'
  | 'GripIcon'
  | 'GripVerticalIcon'
  | 'GuitarIcon'
  | 'GymIcon'
  | 'GymnasticRingsIcon'
  | 'HailIcon'
  | 'HairDryerIcon'
  | 'HammerIcon'
  | 'HangerIcon'
  | 'HardDriveIcon'
  | 'HashIcon'
  | 'HatIcon'
  | 'HeadphonesIcon'
  | 'HeadsetIcon'
  | 'HearingAidIcon'
  | 'HeartCrackIcon'
  | 'HeartEyesIcon'
  | 'HeartIcon'
  | 'HeartPulseIcon'
  | 'HelicopterIcon'
  | 'HelmetIcon'
  | 'HelpCircleIcon'
  | 'HighlighterIcon'
  | 'HikingIcon'
  | 'HolePunchIcon'
  | 'HomeIcon'
  | 'HoneyIcon'
  | 'HospitalBedIcon'
  | 'HospitalIcon'
  | 'HotAirBalloonIcon'
  | 'HotdogIcon'
  | 'HotelIcon'
  | 'HotpotIcon'
  | 'HourglassIcon'
  | 'HumidifierIcon'
  | 'IceSkatesIcon'
  | 'IcecreamIcon'
  | 'IdCardIcon'
  | 'ImageIcon'
  | 'ImageOffIcon'
  | 'ImagePlusIcon'
  | 'ImagesIcon'
  | 'InboxIcon'
  | 'IndentIcon'
  | 'InfoIcon'
  | 'InkBottleIcon'
  | 'InvoiceIcon'
  | 'IronIcon'
  | 'ItalicIcon'
  | 'IvDripIcon'
  | 'JackhammerIcon'
  | 'JellyfishIcon'
  | 'JoystickIcon'
  | 'JuiceIcon'
  | 'JuicerIcon'
  | 'JumpRopeIcon'
  | 'KanbanIcon'
  | 'KebabIcon'
  | 'KettleIcon'
  | 'KettlebellIcon'
  | 'KeyIcon'
  | 'KeyboardIcon'
  | 'KissIcon'
  | 'KiteIcon'
  | 'KnifeIcon'
  | 'KoalaIcon'
  | 'LabelMakerIcon'
  | 'LadderIcon'
  | 'LadybugIcon'
  | 'LampIcon'
  | 'LanternIcon'
  | 'LaptopIcon'
  | 'LaughIcon'
  | 'LaundryIcon'
  | 'LayersIcon'
  | 'LayoutDashboardIcon'
  | 'LayoutTemplateIcon'
  | 'LeafIcon'
  | 'LedgerIcon'
  | 'LemonIcon'
  | 'LetterTrayIcon'
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
  | 'LlmIcon'
  | 'LoanIcon'
  | 'LobsterIcon'
  | 'LocalhostIcon'
  | 'LocateIcon'
  | 'LocationIcon'
  | 'LocationOffIcon'
  | 'LockIcon'
  | 'LockOpenIcon'
  | 'LoginIcon'
  | 'LogoutIcon'
  | 'LollipopIcon'
  | 'LuggageIcon'
  | 'LunchboxIcon'
  | 'LungsIcon'
  | 'MacaronIcon'
  | 'MagazineIcon'
  | 'MagnetIcon'
  | 'MailCheckIcon'
  | 'MailIcon'
  | 'MailLockIcon'
  | 'MailMinusIcon'
  | 'MailOpenIcon'
  | 'MailPlusIcon'
  | 'MailQuestionIcon'
  | 'MailXIcon'
  | 'MangoIcon'
  | 'MapIcon'
  | 'MapPinCheckIcon'
  | 'MapPinIcon'
  | 'MapPinOffIcon'
  | 'MapPinPlusIcon'
  | 'MarkerIcon'
  | 'MarketIcon'
  | 'MaximizeIcon'
  | 'MedalIcon'
  | 'MedicalGloveIcon'
  | 'MedicalMaskIcon'
  | 'MedicalRecordIcon'
  | 'MedicineBottleIcon'
  | 'MegaphoneIcon'
  | 'MenuIcon'
  | 'MessageCircleIcon'
  | 'MessageCirclePlusIcon'
  | 'MessageSquareDotsIcon'
  | 'MessageSquareIcon'
  | 'MessageSquarePlusIcon'
  | 'MessageSquareTextIcon'
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
  | 'MoonStarIcon'
  | 'MoreHorizontalIcon'
  | 'MoreVerticalIcon'
  | 'MosqueIcon'
  | 'MotorcycleIcon'
  | 'MountainIcon'
  | 'MouseIcon'
  | 'MoveIcon'
  | 'MultimeterIcon'
  | 'MuseumIcon'
  | 'MushroomIcon'
  | 'MusicIcon'
  | 'NailIcon'
  | 'NameTagIcon'
  | 'NavigationIcon'
  | 'NerdIcon'
  | 'NervousIcon'
  | 'NetIcon'
  | 'NeutralIcon'
  | 'NewspaperIcon'
  | 'NoDataIcon'
  | 'NoEntryIcon'
  | 'NoodleIcon'
  | 'NotebookIcon'
  | 'NutBoltIcon'
  | 'OctopusIcon'
  | 'OfficeChairIcon'
  | 'OrangeIcon'
  | 'OutdentIcon'
  | 'OvenIcon'
  | 'OwlIcon'
  | 'OxygenTankIcon'
  | 'PaintRollerIcon'
  | 'PaintbrushIcon'
  | 'PaletteIcon'
  | 'PancakeIcon'
  | 'PanelBottomIcon'
  | 'PanelRightIcon'
  | 'PanelTopIcon'
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
  | 'PeachIcon'
  | 'PeacockIcon'
  | 'PearIcon'
  | 'PedestrianCrossingIcon'
  | 'PenHolderIcon'
  | 'PencilIcon'
  | 'PenguinIcon'
  | 'PercentIcon'
  | 'PerfumeIcon'
  | 'PetriDishIcon'
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
  | 'PlungerIcon'
  | 'PlusCircleIcon'
  | 'PlusIcon'
  | 'PodiumIcon'
  | 'PoliceStationIcon'
  | 'PopcornIcon'
  | 'PortIcon'
  | 'PostOfficeIcon'
  | 'PostageStampIcon'
  | 'PostcardIcon'
  | 'PotatoIcon'
  | 'PowerBankIcon'
  | 'PowerIcon'
  | 'PowerPlantIcon'
  | 'PresentationIcon'
  | 'PrinterIcon'
  | 'ProjectorIcon'
  | 'PromptIcon'
  | 'PulseOximeterIcon'
  | 'PumpkinIcon'
  | 'PuzzleIcon'
  | 'QrCodeIcon'
  | 'QueueIcon'
  | 'QuoteIcon'
  | 'RabbitIcon'
  | 'RadioIcon'
  | 'RadioTowerIcon'
  | 'RailwayCrossingIcon'
  | 'RainIcon'
  | 'RainbowIcon'
  | 'RamIcon'
  | 'RangeHoodIcon'
  | 'RaspberryIcon'
  | 'RazorIcon'
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
  | 'RobotIcon'
  | 'RocketIcon'
  | 'RollEyesIcon'
  | 'RopeIcon'
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
  | 'SafetyGogglesIcon'
  | 'SailboatIcon'
  | 'SaladIcon'
  | 'SaltShakerIcon'
  | 'SandwichIcon'
  | 'SanitizerIcon'
  | 'SatelliteDishIcon'
  | 'SatelliteIcon'
  | 'SaveIcon'
  | 'SawIcon'
  | 'ScaleIcon'
  | 'ScalpelIcon'
  | 'ScanIcon'
  | 'ScannerIcon'
  | 'ScarfIcon'
  | 'ScatterChartIcon'
  | 'SchoolIcon'
  | 'ScissorsIcon'
  | 'ScooterIcon'
  | 'ScoreboardIcon'
  | 'ScreamIcon'
  | 'ScreenShareIcon'
  | 'ScrewIcon'
  | 'ScrewdriverIcon'
  | 'SdCardIcon'
  | 'SearchIcon'
  | 'SecurityCameraIcon'
  | 'SeedlingIcon'
  | 'SegwayIcon'
  | 'SelectAllIcon'
  | 'SendIcon'
  | 'ServerIcon'
  | 'ServiceBellIcon'
  | 'SettingsIcon'
  | 'SewingMachineIcon'
  | 'ShareIcon'
  | 'SheepIcon'
  | 'ShieldAlertIcon'
  | 'ShieldCheckIcon'
  | 'ShieldIcon'
  | 'ShieldOffIcon'
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
  | 'SickIcon'
  | 'SidebarIcon'
  | 'SignalIcon'
  | 'SignatureIcon'
  | 'SignpostIcon'
  | 'SinkIcon'
  | 'SirenIcon'
  | 'SkateboardIcon'
  | 'SkiIcon'
  | 'SkipBackIcon'
  | 'SkipForwardIcon'
  | 'SkullIcon'
  | 'SkyscraperIcon'
  | 'SleepyIcon'
  | 'SlidersIcon'
  | 'SlidersVerticalIcon'
  | 'SmartphoneIcon'
  | 'SmartwatchIcon'
  | 'SmileIcon'
  | 'SmirkIcon'
  | 'SnailIcon'
  | 'SnakeIcon'
  | 'SnowGlobeIcon'
  | 'SnowboardIcon'
  | 'SnowflakeIcon'
  | 'SoapIcon'
  | 'SoccerIcon'
  | 'SockIcon'
  | 'SodaIcon'
  | 'SofaIcon'
  | 'SolarPanelIcon'
  | 'SortAscIcon'
  | 'SortDescIcon'
  | 'SortIcon'
  | 'SoupIcon'
  | 'SpaceHeaterIcon'
  | 'SpaceShuttleIcon'
  | 'SparklesIcon'
  | 'SpatulaIcon'
  | 'SpeakerIcon'
  | 'SpiderIcon'
  | 'SpinnerIcon'
  | 'SpongeIcon'
  | 'SpoonIcon'
  | 'SquareIcon'
  | 'SquidIcon'
  | 'StadiumIcon'
  | 'StairsIcon'
  | 'StampPadIcon'
  | 'StaplerIcon'
  | 'StarEyesIcon'
  | 'StarHalfIcon'
  | 'StarIcon'
  | 'StarfishIcon'
  | 'SteakIcon'
  | 'StethoscopeIcon'
  | 'StickyNoteIcon'
  | 'StockTickerIcon'
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
  | 'SunflowerIcon'
  | 'SunglassesIcon'
  | 'SunriseIcon'
  | 'SunsetIcon'
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
  | 'TagsIcon'
  | 'TapeMeasureIcon'
  | 'TaxIcon'
  | 'TaxiIcon'
  | 'TeaIcon'
  | 'TelescopeIcon'
  | 'TempleIcon'
  | 'TennisIcon'
  | 'TentIcon'
  | 'TerminalIcon'
  | 'TestTubeIcon'
  | 'TextAlignIcon'
  | 'ThermometerIcon'
  | 'ThermosIcon'
  | 'ThinkingIcon'
  | 'ThreeDPrinterIcon'
  | 'ThumbsDownIcon'
  | 'ThumbsUpIcon'
  | 'TicketIcon'
  | 'TimerIcon'
  | 'TimesheetIcon'
  | 'TissueBoxIcon'
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
  | 'TrowelIcon'
  | 'TruckIcon'
  | 'TrumpetIcon'
  | 'TunnelIcon'
  | 'TurnLeftIcon'
  | 'TurnRightIcon'
  | 'TurtleIcon'
  | 'TvIcon'
  | 'TvRemoteIcon'
  | 'TypeIcon'
  | 'UTurnIcon'
  | 'UfoIcon'
  | 'UmbrellaIcon'
  | 'UnderlineIcon'
  | 'UndoIcon'
  | 'UniversityIcon'
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
  | 'VaccineVialIcon'
  | 'VacuumCleanerIcon'
  | 'VanIcon'
  | 'VideoIcon'
  | 'VideoOffIcon'
  | 'VideoPlusIcon'
  | 'VinylIcon'
  | 'VirusIcon'
  | 'VoicePromptIcon'
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
  | 'WaterTowerIcon'
  | 'WateringCanIcon'
  | 'WatermelonIcon'
  | 'WaypointIcon'
  | 'WebcamIcon'
  | 'WhaleIcon'
  | 'WheatIcon'
  | 'WheelchairIcon'
  | 'WhiskIcon'
  | 'WhistleIcon'
  | 'WhiteboardEraserIcon'
  | 'WhiteboardIcon'
  | 'WifiIcon'
  | 'WifiOffIcon'
  | 'WindIcon'
  | 'WindmillIcon'
  | 'WindowIcon'
  | 'WineIcon'
  | 'WinkIcon'
  | 'WorriedIcon'
  | 'WrenchIcon'
  | 'XCircleIcon'
  | 'XRayIcon'
  | 'YachtIcon'
  | 'YieldSignIcon'
  | 'YogaIcon'
  | 'YoyoIcon'
  | 'ZooIcon'
  | 'ZoomInIcon'
  | 'ZoomOutIcon'
;
