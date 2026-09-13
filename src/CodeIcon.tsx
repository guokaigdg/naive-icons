import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const CodeIcon = (props: IconProps) => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" {...normalizeIconProps(props)}>
    
<path d="M17 13 L 7 24 L 17 35" stroke="#2A9D8F" stroke-width="4" fill="none"/>
<path d="M31 13 L 41 24 L 31 35" stroke="#2A9D8F" stroke-width="4" fill="none"/>
<path d="M27 9 L 21 39" stroke="#E76F51" stroke-width="3.5"/>

  </svg>
);

export default CodeIcon;
