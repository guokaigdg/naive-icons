import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ParachuteIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M6 24 C6 12 42 12 42 24 C34 20 30 24 24 24 C18 24 14 20 6 24 Z" fill="#E76F51"/>
<path d="M10 24 L20 36 M38 24 L28 36 M24 24 L24 36" stroke="#264653" strokeWidth={sw(2)} fill="none"/>
<circle cx="24" cy="37" r="2.5" fill="#264653" stroke="none"/>
<path d="M24 40 L24 42" stroke="#264653" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

ParachuteIcon.displayName = 'ParachuteIcon';

export default ParachuteIcon;
