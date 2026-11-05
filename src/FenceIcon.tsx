import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FenceIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M8 40 V20 L12 14 L16 20 V40 Z" fill="#8B5E3C"/>
<path d="M20 40 V20 L24 14 L28 20 V40 Z" fill="#8B5E3C"/>
<path d="M32 40 V20 L36 14 L40 20 V40 Z" fill="#8B5E3C"/>
<path d="M6 26 H42" strokeWidth={sw(3)}/>
<path d="M6 34 H42" strokeWidth={sw(3)}/>

    </svg>
  );
});

FenceIcon.displayName = 'FenceIcon';

export default FenceIcon;
