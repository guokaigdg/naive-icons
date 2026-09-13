import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const FolderIcon = (props: IconProps) => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" {...normalizeIconProps(props)}>
    
<path d="M6 16 L6 38 L42 38 L42 18 L22 18 L18 12 L6 12 Z" fill="#E9C46A"/>
<path d="M6 18 L42 18" stroke="#2A2A2A" stroke-width="2"/>

  </svg>
);

export default FolderIcon;
