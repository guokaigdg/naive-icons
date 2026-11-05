import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const HistoryIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="24" cy="24" r="15" fill="#2A9D8F"/>
<path d="M24 24 L24 15" stroke="#FFFFFF" strokeWidth={sw(3)} fill="none"/>
<path d="M24 24 L30 28" stroke="#FFFFFF" strokeWidth={sw(3)} fill="none"/>
<path d="M10 18 A 15 15 0 0 1 24 9" stroke="#E76F51" strokeWidth={sw(4)} fill="none"/>
<path d="M7 21 L14 18 L11 26 Z" fill="#E76F51" stroke="none"/>

    </svg>
  );
});

HistoryIcon.displayName = 'HistoryIcon';

export default HistoryIcon;
