import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const PlayIcon = (props: IconProps) => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" {...normalizeIconProps(props)}>
    
<circle cx="24" cy="24" r="20" fill="#2A9D8F"/>
<path d="M19 16 L34 24 L19 32 Z" fill="#E9C46A"/>

  </svg>
);

export default PlayIcon;
