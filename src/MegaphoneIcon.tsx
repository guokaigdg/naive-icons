import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MegaphoneIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M7 20 L24 11 L24 37 L7 28 Z" fill="#E76F51"/>
<rect x="24" y="9" width="8" height="30" rx="3" fill="#F4A6A4"/>
<path d="M12 29 L15 41 L21 41 L18 31 Z" fill="#E9C46A"/>
<path d="M36 16 L40 20" stroke="#2A9D8F" strokeWidth={sw(3.5)} fill="none"/>
<path d="M36 28 L40 24" stroke="#2A9D8F" strokeWidth={sw(3.5)} fill="none"/>

    </svg>
  );
});

MegaphoneIcon.displayName = 'MegaphoneIcon';

export default MegaphoneIcon;
