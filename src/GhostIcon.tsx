import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const GhostIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M12 40 V20 C 12 13 17 8 24 8 C 31 8 36 13 36 20 V40 L32 36 L28 40 L24 36 L20 40 L16 36 Z" fill="#FFFFFF"/>
<circle cx="19" cy="21" r="2" fill="#2A2A2A" stroke="none"/>
<circle cx="29" cy="21" r="2" fill="#2A2A2A" stroke="none"/>
<ellipse cx="24" cy="29" rx="2.6" ry="3.2" fill="#2A2A2A" stroke="none"/>

    </svg>
  );
});

GhostIcon.displayName = 'GhostIcon';

export default GhostIcon;
