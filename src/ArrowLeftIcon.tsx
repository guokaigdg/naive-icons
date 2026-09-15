import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const ArrowLeftIcon = (props: IconProps) => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" {...normalizeIconProps(props)}>
    
<path d="M39 24 L18 24" stroke="#2A2A2A" stroke-width="4"/>
<path d="M23 15 L9 24 L23 33 Z" fill="#E76F51"/>

  </svg>
);

export default ArrowLeftIcon;
