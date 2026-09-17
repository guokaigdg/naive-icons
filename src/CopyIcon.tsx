import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const CopyIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const labelled = Boolean(props.title || props['aria-label'] || props.role);
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
      
<rect x="14" y="13" width="20" height="22" rx="3" fill="#FAEDCD" stroke="#2A2A2A" stroke-width="3.5"/>
<rect x="10" y="9" width="20" height="22" rx="3" fill="#FFFFFF" stroke="#2A2A2A" stroke-width="3.5"/>
<line x1="15" y1="16" x2="25" y2="16" stroke="#2A2A2A" stroke-width="3.5"/>
<line x1="15" y1="22" x2="25" y2="22" stroke="#2A2A2A" stroke-width="3.5"/>

    </svg>
  );
});

CopyIcon.displayName = 'CopyIcon';

export default CopyIcon;
