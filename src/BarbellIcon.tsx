import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BarbellIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M17 24 H31" stroke="#2A2A2A" strokeWidth={sw(3.5)} fill="none"/>
<rect x="10" y="11" width="7.5" height="26" rx="3.75" fill="#264653"/>
<rect x="30.5" y="11" width="7.5" height="26" rx="3.75" fill="#264653"/>
<rect x="5.5" y="16" width="5.5" height="16" rx="2.75" fill="#E76F51"/>
<rect x="37" y="16" width="5.5" height="16" rx="2.75" fill="#E76F51"/>

    </svg>
  );
});

BarbellIcon.displayName = 'BarbellIcon';

export default BarbellIcon;
