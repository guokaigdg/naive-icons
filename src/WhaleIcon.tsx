import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const WhaleIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M 7.5 26 C 7.5 19.5 13 15.5 20 15.5 C 26 15.5 31.5 17.5 34.5 20.5 C 36.5 16.8 38.8 14.2 41.5 13 C 41.8 17.5 41 21.5 38.5 24.5 C 40.8 27.5 41.5 31.5 41.2 35.5 C 38.2 34 36 31.5 34.4 28.5 C 31.5 32.8 26 34.8 19.5 34.8 C 12 34.8 7.5 32 7.5 26 Z" fill="#264653"/>
<path d="M 17.5 14.5 C 15.8 10.5 16.5 7 19 5.5" stroke="#FAEDCD" strokeWidth={sw(2.5)} fill="none"/>
<path d="M 8.2 28.5 C 11.5 30.5 15 31 18.5 30.5" stroke="#FAEDCD" strokeWidth={sw(2)} fill="none"/>
<circle cx="15" cy="22" r="1.4" fill="#FAEDCD" stroke="none"/>

    </svg>
  );
});

WhaleIcon.displayName = 'WhaleIcon';

export default WhaleIcon;
