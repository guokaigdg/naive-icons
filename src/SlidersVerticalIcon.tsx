import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SlidersVerticalIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M14 7 L14 41" stroke="#2A2A2A" strokeWidth={sw(3.5)}/>
<path d="M24 7 L24 41" stroke="#2A2A2A" strokeWidth={sw(3.5)}/>
<path d="M34 7 L34 41" stroke="#2A2A2A" strokeWidth={sw(3.5)}/>
<circle cx="14" cy="31" r="4.6" fill="#E76F51"/>
<circle cx="24" cy="17" r="4.6" fill="#2A9D8F"/>
<circle cx="34" cy="25" r="4.6" fill="#E9C46A"/>

    </svg>
  );
});

SlidersVerticalIcon.displayName = 'SlidersVerticalIcon';

export default SlidersVerticalIcon;
