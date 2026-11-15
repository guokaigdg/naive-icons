import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MangoIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M27 8.5 C 34 9.5 39 16 38 24 C 37 33 30 40 22 39 C 14 38 9 31 11 23 C 12.5 17 16 12 20.5 9.5 C 22.5 8.3 24.5 8 27 8.5 Z" fill="#E9C46A"/>
<path d="M27 9 C 27.5 8 28.5 7.4 29.5 7.2" stroke="#2A2A2A" strokeWidth={sw(2.8)}/>
<ellipse cx="33" cy="9.5" rx="4.6" ry="2.5" transform="rotate(-30 33 9.5)" fill="#588157" strokeWidth={sw(2)}/>
<path d="M15 22 C 16.5 17 20 13.5 24.5 12" stroke="#FAEDCD" strokeWidth={sw(2.6)} fill="none"/>

    </svg>
  );
});

MangoIcon.displayName = 'MangoIcon';

export default MangoIcon;
