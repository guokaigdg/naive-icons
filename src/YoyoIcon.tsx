import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const YoyoIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M24 15.5 C 24 10 21 9 21 8" strokeWidth={sw(2.8)} fill="none"/>
<circle cx="19" cy="7.5" r="2.8" strokeWidth={sw(2.4)}/>
<circle cx="24" cy="28.5" r="13" fill="#2A9D8F"/>
<circle cx="24" cy="28.5" r="5" fill="#E9C46A" strokeWidth={sw(2.6)}/>
<circle cx="24" cy="28.5" r="1.6" fill="#264653" stroke="none"/>

    </svg>
  );
});

YoyoIcon.displayName = 'YoyoIcon';

export default YoyoIcon;
