import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PancakeIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<ellipse cx="24" cy="33.5" rx="17" ry="5.5" fill="#8B5E3C" strokeWidth={sw(2.5)}/>
<ellipse cx="24" cy="27" rx="16.5" ry="5.2" fill="#E9C46A" strokeWidth={sw(2.5)}/>
<ellipse cx="24" cy="20.5" rx="16" ry="5" fill="#FAEDCD" strokeWidth={sw(2.5)}/>
<rect x="19.5" y="12" width="9" height="6.5" rx="1.5" transform="rotate(-6 24 15)" fill="#E9C46A"/>
<path d="M13 20 C 13 17.5 35 17.5 35 20" stroke="#E76F51" strokeWidth={sw(2.4)} fill="none"/>
<circle cx="20" cy="31" r="1.2" fill="#FAEDCD" stroke="none"/>
<circle cx="28" cy="32.5" r="1.2" fill="#FAEDCD" stroke="none"/>

    </svg>
  );
});

PancakeIcon.displayName = 'PancakeIcon';

export default PancakeIcon;
