import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SkateboardIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M7 25 C12 21 36 21 41 25" stroke="#E76F51" strokeWidth={sw(4)} fill="none"/>
<path d="M11 25 L13 31 M37 25 L35 31" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<circle cx="14" cy="34" r="3.5" fill="#264653"/>
<circle cx="34" cy="34" r="3.5" fill="#264653"/>

    </svg>
  );
});

SkateboardIcon.displayName = 'SkateboardIcon';

export default SkateboardIcon;
