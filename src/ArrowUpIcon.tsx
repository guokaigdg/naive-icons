import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const ArrowUpIcon = (props: IconProps) => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" {...normalizeIconProps(props)}>
    
<path d="M24 39 L24 18" stroke="#2A2A2A" stroke-width="4"/>
<path d="M15 22 L24 8 L33 22 Z" fill="#E76F51"/>

  </svg>
);

export default ArrowUpIcon;
