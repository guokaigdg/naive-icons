import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PenguinIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<ellipse cx="24" cy="25.83" rx="11.89" ry="15.54" fill="#264653"/>
<ellipse cx="24" cy="29.49" rx="6.86" ry="9.14" fill="#FFFFFF"/>
<circle cx="19.43" cy="19.43" r="2.29" fill="#FFFFFF"/>
<circle cx="28.57" cy="19.43" r="2.29" fill="#FFFFFF"/>
<circle cx="19.43" cy="20.34" r="1.19" fill="#2A2A2A"/>
<circle cx="28.57" cy="20.34" r="1.19" fill="#2A2A2A"/>
<path d="M21.26 23.09 L26.74 23.09 L24 26.29 Z" fill="#E76F51"/>
<path d="M12.11 25.83 C 8.46 29.49 9.37 34.97 13.03 36.8" fill="none" stroke="#2A2A2A"/>
<path d="M35.89 25.83 C 39.54 29.49 38.63 34.97 34.97 36.8" fill="none" stroke="#2A2A2A"/>
<ellipse cx="18.51" cy="41.37" rx="4.11" ry="1.83" fill="#E76F51"/>
<ellipse cx="29.49" cy="41.37" rx="4.11" ry="1.83" fill="#E76F51"/>

    </svg>
  );
});

PenguinIcon.displayName = 'PenguinIcon';

export default PenguinIcon;
