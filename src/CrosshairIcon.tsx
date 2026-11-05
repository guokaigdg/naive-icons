import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CrosshairIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="24" cy="24" r="12" fill="none" stroke="#2A9D8F" strokeWidth={sw(4)}/>
<circle cx="24" cy="24" r="2.5" fill="#E76F51" stroke="none"/>
<path d="M24 6 L24 12" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<path d="M24 36 L24 42" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<path d="M6 24 L12 24" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<path d="M36 24 L42 24" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>

    </svg>
  );
});

CrosshairIcon.displayName = 'CrosshairIcon';

export default CrosshairIcon;
