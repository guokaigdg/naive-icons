import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const DressIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M17 6.5 H31 L32.5 22 L38.5 40 H9.5 L15.5 22 Z" fill="#F4A6A4"/>
<path d="M17 6.5 L24 11 L31 6.5" strokeWidth={sw(2.6)} fill="none"/>
<path d="M15.5 22 H32.5" stroke="#E9C46A" strokeWidth={sw(3.5)} fill="none"/>

    </svg>
  );
});

DressIcon.displayName = 'DressIcon';

export default DressIcon;
