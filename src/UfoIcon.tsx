import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const UfoIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<ellipse cx="24" cy="25" rx="16" ry="5.5" fill="#264653"/>
<path d="M16.5 21.5 C 16.5 14 31.5 14 31.5 21.5 Z" fill="#2A9D8F"/>
<circle cx="13" cy="26" r="1.7" fill="#E9C46A" stroke="none"/>
<circle cx="24" cy="27.5" r="1.7" fill="#E9C46A" stroke="none"/>
<circle cx="35" cy="26" r="1.7" fill="#E9C46A" stroke="none"/>
<path d="M24 15 L24 11.5" stroke="#2A2A2A" strokeWidth={sw(2.4)} fill="none"/>
<circle cx="24" cy="10.5" r="1.5" fill="#E9C46A" stroke="none"/>

    </svg>
  );
});

UfoIcon.displayName = 'UfoIcon';

export default UfoIcon;
