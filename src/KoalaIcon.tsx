import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const KoalaIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="15" cy="19" r="7.5" fill="#264653"/>
<circle cx="33" cy="19" r="7.5" fill="#264653"/>
<circle cx="24" cy="28" r="13" fill="#264653"/>
<circle cx="15" cy="19" r="3.5" fill="#FAEDCD" stroke="none"/>
<circle cx="33" cy="19" r="3.5" fill="#FAEDCD" stroke="none"/>
<circle cx="19" cy="25" r="1.8" fill="#FFFFFF" stroke="none"/>
<circle cx="29" cy="25" r="1.8" fill="#FFFFFF" stroke="none"/>
<ellipse cx="24" cy="32" rx="4" ry="5.5" fill="#2A2A2A" stroke="none"/>

    </svg>
  );
});

KoalaIcon.displayName = 'KoalaIcon';

export default KoalaIcon;
