import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const OrangeIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="24" cy="26" r="14" fill="#E76F51"/>
<path d="M24 12 C 24 8 27 5.5 30.5 6" stroke="#2A2A2A" strokeWidth={sw(2.8)}/>
<ellipse cx="33.5" cy="8.5" rx="5.5" ry="3" transform="rotate(-28 33.5 8.5)" fill="#588157" strokeWidth={sw(2)}/>
<path d="M14 20 C 15.5 16 19 13.5 23 13" stroke="#FAEDCD" strokeWidth={sw(2.6)} fill="none"/>
<circle cx="24" cy="39.5" r="1.2" fill="#2A2A2A" stroke="none"/>

    </svg>
  );
});

OrangeIcon.displayName = 'OrangeIcon';

export default OrangeIcon;
