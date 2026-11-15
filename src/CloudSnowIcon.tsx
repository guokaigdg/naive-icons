import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CloudSnowIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M11 29 C 5.5 29 5.5 21 11.5 20 C 12 14.5 19 11.8 23 15.5 C 26.4 10 35.8 13.2 34.4 20 C 40 20.5 40 29 34.2 29 Z" fill="#FAEDCD"/>
<path d="M16 33.8 L16 40.2 M13.2 35.4 L18.8 38.6 M18.8 35.4 L13.2 38.6" stroke="#2A9D8F" strokeWidth={sw(2.4)} fill="none"/>
<path d="M24 31.4 L24 37.8 M21.2 33 L26.8 36.2 M26.8 33 L21.2 36.2" stroke="#2A9D8F" strokeWidth={sw(2.4)} fill="none"/>
<path d="M32 33.8 L32 40.2 M29.2 35.4 L34.8 38.6 M34.8 35.4 L29.2 38.6" stroke="#2A9D8F" strokeWidth={sw(2.4)} fill="none"/>

    </svg>
  );
});

CloudSnowIcon.displayName = 'CloudSnowIcon';

export default CloudSnowIcon;
