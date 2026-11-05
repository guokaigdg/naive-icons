import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const VolleyballIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="24" cy="24" r="17" fill="#FAEDCD"/>
<path d="M24 7 C18 17 18 31 24 41" stroke="#264653" strokeWidth={sw(2.5)} fill="none"/>
<path d="M8 17 C18 20 30 20 40 17" stroke="#264653" strokeWidth={sw(2.5)} fill="none"/>
<path d="M8 31 C18 28 30 28 40 31" stroke="#264653" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

VolleyballIcon.displayName = 'VolleyballIcon';

export default VolleyballIcon;
