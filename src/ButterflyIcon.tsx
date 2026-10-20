import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ButterflyIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<ellipse cx="14.3" cy="17.21" rx="7.76" ry="5.82" transform="rotate(-25 14.3 17.21)" fill="#F4A6A4"/>
<ellipse cx="33.7" cy="17.21" rx="7.76" ry="5.82" transform="rotate(25 33.7 17.21)" fill="#F4A6A4"/>
<ellipse cx="15.27" cy="31.76" rx="6.31" ry="4.85" transform="rotate(20 15.27 31.76)" fill="#E76F51"/>
<ellipse cx="32.73" cy="31.76" rx="6.31" ry="4.85" transform="rotate(-20 32.73 31.76)" fill="#E76F51"/>
<circle cx="13.33" cy="16.24" r="1.75" fill="#FFFFFF"/>
<circle cx="34.67" cy="16.24" r="1.75" fill="#FFFFFF"/>
<circle cx="24" cy="11.39" r="2.91" fill="#264653"/>
<rect x="21.57" y="13.33" width="4.85" height="23.29" rx="2.43" fill="#264653"/>
<path d="M21.09 8.47 C 18.18 4.59 15.27 4.59 13.33 6.53" stroke="#2A2A2A" fill="none" strokeWidth={sw(1.8)}/>
<path d="M26.91 8.47 C 29.82 4.59 32.73 4.59 34.67 6.53" stroke="#2A2A2A" fill="none" strokeWidth={sw(1.8)}/>

    </svg>
  );
});

ButterflyIcon.displayName = 'ButterflyIcon';

export default ButterflyIcon;
