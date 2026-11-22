import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const AiAgentIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="10" y="12" width="28" height="24" rx="6" fill="#264653"/>
<path d="M24 12 V7" strokeWidth={sw(2.5)} fill="none"/>
<circle cx="24" cy="6" r="2.6" fill="#E76F51" stroke="none"/>
<circle cx="18" cy="22" r="3" fill="#FAEDCD" stroke="none"/>
<circle cx="30" cy="22" r="3" fill="#FAEDCD" stroke="none"/>
<path d="M19 29 Q24 32.5 29 29" stroke="#FAEDCD" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

AiAgentIcon.displayName = 'AiAgentIcon';

export default AiAgentIcon;
