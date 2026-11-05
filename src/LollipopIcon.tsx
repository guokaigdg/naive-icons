import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const LollipopIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="24" cy="17" r="10" fill="#F4A6A4"/>
<path d="M24 17 C28 13 32 17 29 21 C26 25 20 21 20 17 C20 12 26 10 29 13" stroke="#FFFFFF" strokeWidth={sw(2.5)} fill="none"/>
<path d="M24 27 L24 42" stroke="#8B5E3C" strokeWidth={sw(3.5)} fill="none"/>

    </svg>
  );
});

LollipopIcon.displayName = 'LollipopIcon';

export default LollipopIcon;
