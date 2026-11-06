import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SmartwatchIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="15" y="15" width="18" height="18" rx="5" fill="#264653"/>
<rect x="19" y="19" width="10" height="10" rx="2" fill="#2A9D8F"/>
<path d="M19 15 L19 8 L29 8 L29 15" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>
<path d="M19 33 L19 40 L29 40 L29 33" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

SmartwatchIcon.displayName = 'SmartwatchIcon';

export default SmartwatchIcon;
