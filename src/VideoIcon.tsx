import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const VideoIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const labelled = Boolean(props.title || props['aria-label'] || props.role);
  const sw = scaledStroke(props.strokeWidth);
  return (
    <svg
      ref={ref}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      role={props.title ? 'img' : undefined}
      aria-hidden={labelled ? undefined : true}
      {...normalizeIconProps(props)}
    >
      {props.title ? <title>{props.title}</title> : null}

<rect x="4.8" y="14.4" width="26.88" height="19.2" rx="3.84" fill="#264653"/>
<path d="M31.68 21.12 L 43.2 14.4 L 43.2 33.6 L 31.68 26.88 Z" fill="#E76F51"/>
<path d="M14.4 20.16 L 23.04 24 L 14.4 27.84 Z" fill="#E9C46A"/>

    </svg>
  );
});

VideoIcon.displayName = 'VideoIcon';

export default VideoIcon;
