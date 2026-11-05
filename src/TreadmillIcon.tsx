import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const TreadmillIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M8 30 H32 L40 38 H12 Z" fill="#264653"/>
<path d="M32 30 V10 H38 V28" fill="none" strokeWidth={sw(3)}/>
<rect x="34" y="8" width="8" height="6" rx="2" fill="#E76F51"/>
<path d="M12 42 H36" strokeWidth={sw(3)}/>

    </svg>
  );
});

TreadmillIcon.displayName = 'TreadmillIcon';

export default TreadmillIcon;
