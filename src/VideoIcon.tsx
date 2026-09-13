import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const VideoIcon = (props: IconProps) => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" {...normalizeIconProps(props)}>
    
<rect x="4" y="14" width="28" height="20" rx="4" fill="#264653"/>
<path d="M32 21 L 44 14 L 44 34 L 32 27 Z" fill="#E76F51"/>
<path d="M14 20 L 23 24 L 14 28 Z" fill="#E9C46A"/>

  </svg>
);

export default VideoIcon;
