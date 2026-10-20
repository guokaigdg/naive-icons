import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const DogIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<ellipse cx="10.56" cy="18.24" rx="5.76" ry="9.6" fill="#8B5E3C"/>
<ellipse cx="37.44" cy="18.24" rx="5.76" ry="9.6" fill="#8B5E3C"/>
<circle cx="24" cy="25.92" r="15.36" fill="#8B5E3C"/>
<circle cx="18.24" cy="24" r="2.4" fill="#FFFFFF"/>
<circle cx="29.76" cy="24" r="2.4" fill="#FFFFFF"/>
<circle cx="18.24" cy="24.96" r="1.25" fill="#2A2A2A"/>
<circle cx="29.76" cy="24.96" r="1.25" fill="#2A2A2A"/>
<ellipse cx="24" cy="31.68" rx="3.84" ry="2.88" fill="#2A2A2A"/>

    </svg>
  );
});

DogIcon.displayName = 'DogIcon';

export default DogIcon;
