import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MonkeyIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="13" cy="22" r="5" fill="#8B5E3C"/>
<circle cx="35" cy="22" r="5" fill="#8B5E3C"/>
<circle cx="24" cy="24" r="11" fill="#8B5E3C"/>
<ellipse cx="24" cy="26" rx="7" ry="8" fill="#FAEDCD" stroke="none"/>
<circle cx="21" cy="24" r="1.3" fill="#2A2A2A" stroke="none"/>
<circle cx="27" cy="24" r="1.3" fill="#2A2A2A" stroke="none"/>
<path d="M21 30 C23 32 25 32 27 30" stroke="#2A2A2A" strokeWidth={sw(2)} fill="none"/>

    </svg>
  );
});

MonkeyIcon.displayName = 'MonkeyIcon';

export default MonkeyIcon;
