import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ScreamIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="24" cy="24" r="16" fill="#E9C46A"/>
<circle cx="17.5" cy="18.5" r="2" fill="#2A2A2A" stroke="none"/>
<circle cx="30.5" cy="18.5" r="2" fill="#2A2A2A" stroke="none"/>
<path d="M14.5 13.5 C 16 11.5 18.5 11.5 20 13.5" stroke="#2A2A2A" strokeWidth={sw(2.2)} fill="none"/>
<path d="M28 13.5 C 29.5 11.5 32 11.5 33.5 13.5" stroke="#2A2A2A" strokeWidth={sw(2.2)} fill="none"/>
<ellipse cx="24" cy="30" rx="5.5" ry="7" fill="#2A2A2A" stroke="none"/>

    </svg>
  );
});

ScreamIcon.displayName = 'ScreamIcon';

export default ScreamIcon;
