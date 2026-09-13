import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const CheckIcon = (props: IconProps) => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" {...normalizeIconProps(props)}>
    
<circle cx="24" cy="24" r="17" fill="#588157"/>
<path d="M15 24 L 21.5 31 L 34 17" stroke="#FFFFFF" stroke-width="4.5" fill="none"/>

  </svg>
);

export default CheckIcon;
