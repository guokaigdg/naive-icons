import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CropIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="14" y="15" width="20" height="18" rx="2" fill="#FAEDCD"/>
<path d="M6 19 L6 9 L16 9" stroke="#E76F51" strokeWidth={sw(3.5)} fill="none"/>
<path d="M42 29 L42 39 L32 39" stroke="#E76F51" strokeWidth={sw(3.5)} fill="none"/>

    </svg>
  );
});

CropIcon.displayName = 'CropIcon';

export default CropIcon;
