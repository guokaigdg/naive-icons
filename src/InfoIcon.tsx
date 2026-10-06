import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const InfoIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="24" cy="24" r="17" fill="none" stroke="#2A2A2A" strokeWidth={sw(3.5)}/>
<circle cx="24" cy="15.5" r="2.2" fill="#2A9D8F"/>
<path d="M24 22.5 L24 34" fill="none" stroke="#2A9D8F" strokeWidth={sw(4)}/>

    </svg>
  );
});

InfoIcon.displayName = 'InfoIcon';

export default InfoIcon;

