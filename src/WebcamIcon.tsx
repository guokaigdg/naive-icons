import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const WebcamIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="24" cy="20" r="11" fill="#264653"/>
<circle cx="24" cy="20" r="5" fill="#FAEDCD" stroke="none"/>
<circle cx="24" cy="20" r="2" fill="#2A2A2A" stroke="none"/>
<path d="M24 31 L24 38 M10 38 L38 38" stroke="#2A2A2A" fill="none"/>

    </svg>
  );
});

WebcamIcon.displayName = 'WebcamIcon';

export default WebcamIcon;
