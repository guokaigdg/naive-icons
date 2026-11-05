import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const NoDataIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M8 13 L8 39 L40 39 L40 13 Z" fill="#8B5E3C" stroke="none"/>
<path d="M11 13 L37 13 L33 22 L15 22 Z" fill="#264653" stroke="#2A2A2A" strokeWidth={sw(3)} strokeLinejoin="round"/>
<path d="M8 13 L8 39 L40 39 L40 13" stroke="#2A2A2A" strokeWidth={sw(3.5)} fill="none"/>
<rect x="14" y="26" width="20" height="10" rx="2" fill="#FAEDCD" stroke="none"/>
<circle cx="20" cy="31" r="1.6" fill="#2A2A2A" stroke="none"/>
<circle cx="28" cy="31" r="1.6" fill="#2A2A2A" stroke="none"/>

    </svg>
  );
});

NoDataIcon.displayName = 'NoDataIcon';

export default NoDataIcon;
