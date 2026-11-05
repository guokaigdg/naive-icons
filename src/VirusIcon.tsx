import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const VirusIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="24" cy="24" r="9" fill="#E76F51"/>
<path d="M24 15 V9 M24 33 V39 M15 24 H9 M33 24 H39" strokeWidth={sw(3)}/>
<path d="M17.6 17.6 L13.5 13.5 M30.4 30.4 L34.5 34.5 M30.4 17.6 L34.5 13.5 M17.6 30.4 L13.5 34.5" strokeWidth={sw(3)}/>
<circle cx="24" cy="9" r="2" fill="#E9C46A" stroke="none"/>
<circle cx="24" cy="39" r="2" fill="#E9C46A" stroke="none"/>
<circle cx="9" cy="24" r="2" fill="#E9C46A" stroke="none"/>
<circle cx="39" cy="24" r="2" fill="#E9C46A" stroke="none"/>
<circle cx="18" cy="27" r="1.8" fill="#FAEDCD" stroke="none"/>
<circle cx="29" cy="20" r="1.8" fill="#FAEDCD" stroke="none"/>

    </svg>
  );
});

VirusIcon.displayName = 'VirusIcon';

export default VirusIcon;
