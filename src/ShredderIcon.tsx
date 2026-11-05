import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ShredderIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="8" y="19" width="32" height="20" rx="3" fill="#264653"/>
<path d="M18 6 L30 6 L30 19" stroke="#FAEDCD" strokeWidth={sw(2.5)} fill="none"/>
<path d="M14 33 L14 41 M19 33 L19 41 M24 33 L24 41 M29 33 L29 41 M34 33 L34 41" stroke="#FAEDCD" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

ShredderIcon.displayName = 'ShredderIcon';

export default ShredderIcon;
