import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BathtubIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M6 20 H42 C42 30 36 36 24 36 C12 36 6 30 6 20 Z" fill="#FAEDCD"/>
<path d="M14 36 V41" strokeWidth={sw(3)}/>
<path d="M34 36 V41" strokeWidth={sw(3)}/>
<path d="M10 16 C10 12 14 10 18 12" stroke="#2A9D8F" strokeWidth={sw(3)} fill="none"/>
<circle cx="24" cy="26" r="2" fill="#2A9D8F" stroke="none"/>

    </svg>
  );
});

BathtubIcon.displayName = 'BathtubIcon';

export default BathtubIcon;
