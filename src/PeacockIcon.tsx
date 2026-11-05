import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PeacockIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="24" cy="24" r="16" fill="#2A9D8F"/>
<circle cx="24" cy="24" r="4" fill="#E9C46A" stroke="none"/>
<circle cx="14" cy="14" r="2.5" fill="#E9C46A" stroke="none"/>
<circle cx="34" cy="14" r="2.5" fill="#E9C46A" stroke="none"/>
<circle cx="12" cy="27" r="2.5" fill="#E9C46A" stroke="none"/>
<circle cx="36" cy="27" r="2.5" fill="#E9C46A" stroke="none"/>
<ellipse cx="24" cy="34" rx="5" ry="7" fill="#264653"/>
<circle cx="24" cy="27" r="3.5" fill="#264653"/>

    </svg>
  );
});

PeacockIcon.displayName = 'PeacockIcon';

export default PeacockIcon;
