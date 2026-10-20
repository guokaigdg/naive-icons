import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const RabbitIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<ellipse cx="17.6" cy="13.03" rx="3.66" ry="8.23" fill="#FAEDCD"/>
<ellipse cx="30.4" cy="13.03" rx="3.66" ry="8.23" fill="#FAEDCD"/>
<ellipse cx="17.6" cy="13.94" rx="1.65" ry="5.03" fill="#F4A6A4"/>
<ellipse cx="30.4" cy="13.94" rx="1.65" ry="5.03" fill="#F4A6A4"/>
<circle cx="24" cy="30.4" r="11.89" fill="#FAEDCD"/>
<circle cx="19.43" cy="28.57" r="1.46" fill="#2A2A2A"/>
<circle cx="28.57" cy="28.57" r="1.46" fill="#2A2A2A"/>
<path d="M22.17 32.23 L25.83 32.23 L24 34.51 Z" fill="#F4A6A4"/>
<path d="M24 34.51 L24 35.89" stroke="#2A2A2A" strokeWidth={sw(1.8)}/>
<path d="M20.34 37.71 Q 24 40 27.66 37.71" stroke="#2A2A2A" fill="none" strokeWidth={sw(1.8)}/>
<path d="M12.11 30.4 L6.63 28.57" stroke="#2A2A2A" strokeWidth={sw(1.5)}/>
<path d="M12.11 34.06 L6.63 34.97" stroke="#2A2A2A" strokeWidth={sw(1.5)}/>
<path d="M35.89 30.4 L41.37 28.57" stroke="#2A2A2A" strokeWidth={sw(1.5)}/>
<path d="M35.89 34.06 L41.37 34.97" stroke="#2A2A2A" strokeWidth={sw(1.5)}/>

    </svg>
  );
});

RabbitIcon.displayName = 'RabbitIcon';

export default RabbitIcon;
