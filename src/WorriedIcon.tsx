import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const WorriedIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
<path d="M14 17 L20 19 M34 17 L28 19" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>
<circle cx="18" cy="22" r="1.8" fill="#2A2A2A" stroke="none"/>
<circle cx="30" cy="22" r="1.8" fill="#2A2A2A" stroke="none"/>
<path d="M18 32 C21 30 23 33 26 31" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

WorriedIcon.displayName = 'WorriedIcon';

export default WorriedIcon;
