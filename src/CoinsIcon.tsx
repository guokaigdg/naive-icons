import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CoinsIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="18" cy="19" r="9" fill="#FAEDCD"/>
<circle cx="31" cy="30" r="9" fill="#E9C46A"/>
<circle cx="18" cy="19" r="4.5" fill="#E9C46A" stroke="none"/>
<path d="M31 25 V35 M34 27.5 C 34 25.5 28 25.5 28 28 C 28 30.5 34 30.5 34 33 C 34 35 28 35 28 33" stroke="#8B5E3C" strokeWidth={sw(1.8)} fill="none"/>

    </svg>
  );
});

CoinsIcon.displayName = 'CoinsIcon';

export default CoinsIcon;
