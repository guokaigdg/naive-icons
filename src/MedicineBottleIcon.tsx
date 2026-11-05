import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MedicineBottleIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="14" y="14" width="20" height="26" rx="3" fill="#FFFFFF"/>
<rect x="18" y="6" width="12" height="8" rx="2" fill="#E76F51"/>
<rect x="15" y="20" width="18" height="10" fill="#FAEDCD" stroke="none"/>
<path d="M19 25 L29 25" stroke="#2A9D8F" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

MedicineBottleIcon.displayName = 'MedicineBottleIcon';

export default MedicineBottleIcon;
