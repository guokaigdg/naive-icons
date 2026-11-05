import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BlenderIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M15 8 L33 8 L31 28 L17 28 Z" fill="#FAEDCD"/>
<path d="M15 14 L33 14" stroke="#264653" strokeWidth={sw(2.5)} fill="none"/>
<rect x="13" y="28" width="22" height="9" rx="3" fill="#2A9D8F"/>
<circle cx="24" cy="32" r="2.5" fill="#E76F51" stroke="none"/>
<path d="M19 37 L19 41 M29 37 L29 41" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

BlenderIcon.displayName = 'BlenderIcon';

export default BlenderIcon;
