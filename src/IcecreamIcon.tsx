import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const IcecreamIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M15.36 23.04 L 24 42.24 L 32.64 23.04 Z" fill="#E9C46A"/>
<path d="M18.24 27.84 L 29.76 27.84 M20.16 32.64 L 27.84 32.64" stroke="#2A2A2A" strokeWidth={sw(1.5)}/>
<circle cx="24" cy="16.32" r="8.64" fill="#F4A6A4"/>
<circle cx="24" cy="7.2" r="2.4" fill="#E76F51"/>
<circle cx="21.12" cy="15.36" r="1.34" fill="#2A2A2A"/>
<circle cx="26.88" cy="15.36" r="1.34" fill="#2A2A2A"/>
<path d="M21.6 18.72 Q 24 20.64 26.4 18.72" stroke="#2A2A2A" fill="none" strokeWidth={sw(1.5)}/>

    </svg>
  );
});

IcecreamIcon.displayName = 'IcecreamIcon';

export default IcecreamIcon;
