import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const MagnetIcon = (props: IconProps) => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" {...normalizeIconProps(props)}>
    
<path d="M8 8 L8 24 C 8 34 16 42 24 42 C 32 42 40 34 40 24 L40 8 L32 8 L32 24 C 32 30 28 32 24 32 C 20 32 16 30 16 24 L16 8 Z" fill="#E76F51"/>
<rect x="8" y="8" width="8" height="8" fill="#264653"/>
<rect x="32" y="8" width="8" height="8" fill="#264653"/>

  </svg>
);

export default MagnetIcon;
