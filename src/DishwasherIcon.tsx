import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const DishwasherIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="7" y="6" width="34" height="36" rx="4" fill="#FFFFFF"/>
<path d="M7 16 L41 16" stroke="#264653" strokeWidth={sw(2.5)} fill="none"/>
<path d="M12 23 L12 35 M36 23 L36 35" stroke="#2A9D8F" strokeWidth={sw(2)} fill="none"/>
<path d="M13 24 L35 24 M13 30 L35 30 M13 36 L35 36" stroke="#2A9D8F" strokeWidth={sw(2.5)} fill="none"/>
<circle cx="34" cy="11" r="2" fill="#E76F51" stroke="none"/>

    </svg>
  );
});

DishwasherIcon.displayName = 'DishwasherIcon';

export default DishwasherIcon;
