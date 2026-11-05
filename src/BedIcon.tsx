import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BedIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="6" y="16" width="5" height="18" rx="2" fill="#264653"/>
<rect x="11" y="24" width="31" height="7" rx="2" fill="#FAEDCD"/>
<rect x="11" y="31" width="31" height="5" rx="1" fill="#8B5E3C"/>
<rect x="14" y="19" width="10" height="6" rx="2" fill="#F4A6A4"/>
<path d="M28 22 L38 22 L38 30 L28 30 Z" fill="#2A9D8F" stroke="none"/>
<path d="M9 36 L9 40 M38 36 L38 40" stroke="#8B5E3C" strokeWidth={sw(3)} fill="none"/>

    </svg>
  );
});

BedIcon.displayName = 'BedIcon';

export default BedIcon;
