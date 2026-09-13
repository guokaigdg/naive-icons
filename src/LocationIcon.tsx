import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const LocationIcon = (props: IconProps) => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" {...normalizeIconProps(props)}>
    
<path d="M24 6 C 14 6 8 14 8 22 C 8 32 24 42 24 42 C 24 42 40 32 40 22 C 40 14 34 6 24 6 Z" fill="#E76F51"/>
<circle cx="24" cy="22" r="6" fill="#FAEDCD"/>

  </svg>
);

export default LocationIcon;
