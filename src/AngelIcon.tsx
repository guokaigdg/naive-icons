import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const AngelIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="24" cy="24" r="15" fill="#E9C46A"/>
<ellipse cx="24" cy="8" rx="8" ry="3" stroke="#2A9D8F" strokeWidth={sw(2.5)} fill="none"/>
<circle cx="18" cy="20" r="1.8" fill="#2A2A2A" stroke="none"/>
<circle cx="30" cy="20" r="1.8" fill="#2A2A2A" stroke="none"/>
<path d="M17 29 C20 33 28 33 31 29" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

AngelIcon.displayName = 'AngelIcon';

export default AngelIcon;
