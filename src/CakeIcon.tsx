import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CakeIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="10.29" y="27.66" width="27.43" height="10.97" rx="1.83" fill="#F4A6A4"/>
<rect x="13.94" y="18.51" width="20.11" height="9.14" rx="1.83" fill="#FAEDCD"/>
<path d="M13.94 20.34 C 15.77 24 17.6 20.34 19.43 23.09 C 21.26 25.83 23.09 20.34 24.91 23.09 C 26.74 25.83 28.57 20.34 30.4 23.09 C 32.23 25.83 33.14 21.26 34.06 22.17 L 34.06 18.51 L 13.94 18.51 Z" fill="#E76F51"/>
<rect x="22.17" y="9.37" width="3.66" height="7.31" fill="#2A9D8F"/>
<path d="M24 4.8 C 22.17 7.09 22.17 8.91 24 8.91 C 25.83 8.91 25.83 7.09 24 4.8 Z" fill="#E9C46A"/>
<path d="M7.54 38.63 L40.46 38.63" stroke="#8B5E3C" strokeWidth={sw(3)}/>

    </svg>
  );
});

CakeIcon.displayName = 'CakeIcon';

export default CakeIcon;
