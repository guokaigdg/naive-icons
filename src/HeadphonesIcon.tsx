import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const HeadphonesIcon = (props: IconProps) => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" {...normalizeIconProps(props)}>
    
<path d="M10 31 L 10 25 C 10 11 38 11 38 25 L 38 31" stroke="#2A2A2A" stroke-width="4" fill="none"/>
<rect x="6" y="27" width="8" height="12" rx="3.5" fill="#E76F51"/>
<rect x="34" y="27" width="8" height="12" rx="3.5" fill="#E76F51"/>

  </svg>
);

export default HeadphonesIcon;
