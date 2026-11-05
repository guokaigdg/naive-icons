import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const AngryIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="24" cy="24" r="16" fill="#E76F51"/>
<path d="M14 16 L21 20" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<path d="M34 16 L27 20" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<circle cx="18" cy="23" r="2" fill="#2A2A2A" stroke="none"/>
<circle cx="30" cy="23" r="2" fill="#2A2A2A" stroke="none"/>
<path d="M16 34 Q 24 26 32 34" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>

    </svg>
  );
});

AngryIcon.displayName = 'AngryIcon';

export default AngryIcon;
