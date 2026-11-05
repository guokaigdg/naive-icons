import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PlantPotIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M14 28 H34 L31 42 H17 Z" fill="#E76F51"/>
<path d="M24 28 V16"/>
<path d="M24 22 C18 22 14 18 14 12 C20 12 24 16 24 22 Z" fill="#588157"/>
<path d="M24 24 C30 24 34 20 34 14 C28 14 24 18 24 24 Z" fill="#2A9D8F"/>

    </svg>
  );
});

PlantPotIcon.displayName = 'PlantPotIcon';

export default PlantPotIcon;
