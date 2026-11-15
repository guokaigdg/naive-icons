import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CarWashIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M6 27 L11 27 L15 20 H29 L33 27 H40 L40 33 H6 Z" fill="#2A9D8F"/>
<path d="M16.5 26 L18 22 H25.5 L29.5 26 Z" fill="#FAEDCD" stroke="none"/>
<circle cx="14" cy="34" r="4" fill="#264653"/>
<circle cx="33" cy="34" r="4" fill="#264653"/>
<circle cx="14" cy="34" r="1.4" fill="#FAEDCD" stroke="none"/>
<circle cx="33" cy="34" r="1.4" fill="#FAEDCD" stroke="none"/>
<circle cx="11.5" cy="15" r="2.6" fill="#FAEDCD" strokeWidth={sw(2.4)}/>
<circle cx="18.5" cy="10.5" r="3" fill="#FAEDCD" strokeWidth={sw(2.4)}/>
<circle cx="26" cy="7.5" r="2.4" fill="#FAEDCD" strokeWidth={sw(2.4)}/>

    </svg>
  );
});

CarWashIcon.displayName = 'CarWashIcon';

export default CarWashIcon;
