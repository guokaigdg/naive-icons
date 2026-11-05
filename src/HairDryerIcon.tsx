import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const HairDryerIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M10 16 C10 12 13 10 16 10 H28 C34 10 38 15 38 21 C38 27 34 32 28 32 H16 C13 32 10 30 10 26 Z" fill="#E76F51"/>
<rect x="24" y="30" width="10" height="12" rx="2" fill="#264653"/>
<path d="M8 18 V26" strokeWidth={sw(3)}/>
<path d="M12 18 V26" stroke="#FAEDCD" strokeWidth={sw(2)}/>
<path d="M16 18 V26" stroke="#FAEDCD" strokeWidth={sw(2)}/>

    </svg>
  );
});

HairDryerIcon.displayName = 'HairDryerIcon';

export default HairDryerIcon;
