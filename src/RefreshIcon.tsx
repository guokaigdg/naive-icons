import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const RefreshIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M11 16.5 A 15 15 0 0 1 37 16.5" fill="none" stroke="#2A9D8F" strokeWidth={sw(4.5)}/>
<path d="M40.7 23 L33 18.8 L41 14.2 Z" fill="#E76F51" strokeWidth={sw(3)}/>
<path d="M37 31.5 A 15 15 0 0 1 11 31.5" fill="none" stroke="#2A9D8F" strokeWidth={sw(4.5)}/>
<path d="M7.3 25 L15 29.2 L7 33.8 Z" fill="#E76F51" strokeWidth={sw(3)}/>

    </svg>
  );
});

RefreshIcon.displayName = 'RefreshIcon';

export default RefreshIcon;

