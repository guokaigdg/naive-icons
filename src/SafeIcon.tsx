import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SafeIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="7" y="7" width="34" height="34" rx="4" fill="#264653"/>
<rect x="12" y="12" width="24" height="24" rx="3" fill="#FAEDCD" stroke="none"/>
<circle cx="23" cy="24" r="6" fill="#E76F51"/>
<path d="M23 18 L23 24 L27 28" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>
<path d="M33 20 L38 20 M33 28 L38 28" stroke="#E9C46A" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

SafeIcon.displayName = 'SafeIcon';

export default SafeIcon;
