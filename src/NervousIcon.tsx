import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const NervousIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="24" cy="24" r="16" fill="#E9C46A"/>
<circle cx="18" cy="21" r="1.8" fill="#2A2A2A" stroke="none"/>
<circle cx="30" cy="21" r="1.8" fill="#2A2A2A" stroke="none"/>
<path d="M17 31 L20 33 L23 31 L26 33 L29 31" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>
<path d="M34 14 C32 17 32 19 34 20 C36 19 36 17 34 14 Z" fill="#2A9D8F" stroke="none"/>

    </svg>
  );
});

NervousIcon.displayName = 'NervousIcon';

export default NervousIcon;
