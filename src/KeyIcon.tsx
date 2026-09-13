import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const KeyIcon = (props: IconProps) => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" {...normalizeIconProps(props)}>
    
<circle cx="14" cy="24" r="10" fill="#E9C46A"/>
<circle cx="14" cy="24" r="4" fill="#FAEDCD"/>
<path d="M24 24 L42 24" stroke="#2A2A2A" stroke-width="4"/>
<path d="M30 24 L30 30" stroke="#2A2A2A" stroke-width="3"/>
<path d="M36 24 L36 30" stroke="#2A2A2A" stroke-width="3"/>

  </svg>
);

export default KeyIcon;
