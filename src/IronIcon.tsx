import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const IronIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M8 30 C8 22 15 16 28 16 H40 V30 Z" fill="#2A9D8F"/>
<path d="M16 19 C16 14 20 10 24 10 C28 10 32 13 32 18" fill="none"/>
<path d="M8 30 H40" stroke="#2A2A2A" strokeWidth={sw(4)}/>

    </svg>
  );
});

IronIcon.displayName = 'IronIcon';

export default IronIcon;
