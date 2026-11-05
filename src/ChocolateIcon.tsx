import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ChocolateIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="8" y="11" width="32" height="26" rx="2" fill="#8B5E3C"/>
<path d="M16 11 V37 M24 11 V37 M32 11 V37" stroke="#2A2A2A" strokeWidth={sw(2)}/>
<path d="M8 24 H40" stroke="#2A2A2A" strokeWidth={sw(2)}/>

    </svg>
  );
});

ChocolateIcon.displayName = 'ChocolateIcon';

export default ChocolateIcon;
