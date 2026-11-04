import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ScanIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M8 16 L8 8 L16 8" stroke="#2A2A2A" strokeWidth={sw(3.5)} fill="none"/>
<path d="M32 8 L40 8 L40 16" stroke="#2A2A2A" strokeWidth={sw(3.5)} fill="none"/>
<path d="M40 32 L40 40 L32 40" stroke="#2A2A2A" strokeWidth={sw(3.5)} fill="none"/>
<path d="M16 40 L8 40 L8 32" stroke="#2A2A2A" strokeWidth={sw(3.5)} fill="none"/>
<rect x="15" y="15" width="18" height="18" rx="2" fill="#2A9D8F" stroke="none"/>
<path d="M19 19 L19 29" stroke="#FFFFFF" strokeWidth={sw(2.5)}/>
<path d="M23.5 18 L23.5 30" stroke="#FFFFFF" strokeWidth={sw(2.5)}/>
<path d="M28 19 L28 29" stroke="#FFFFFF" strokeWidth={sw(2.5)}/>

    </svg>
  );
});

ScanIcon.displayName = 'ScanIcon';

export default ScanIcon;
