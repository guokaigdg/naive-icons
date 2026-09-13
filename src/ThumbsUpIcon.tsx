import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const ThumbsUpIcon = (props: IconProps) => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" {...normalizeIconProps(props)}>
    
<rect x="7" y="21" width="7" height="17" rx="2" fill="#2A9D8F"/>
<path d="M16 38 L 16 23 L 23 12 C 25 9.5 27.5 11 26.5 14 L 24.5 20 L 33 20 C 36.5 20 38 22.5 37 25.5 L 34 35 C 33.3 37 31.8 38 29.5 38 Z" fill="#E9C46A"/>

  </svg>
);

export default ThumbsUpIcon;
