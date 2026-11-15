import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const TrumpetIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M30 18 L41 12 C 43 12 43 36 41 36 L30 30 Z" fill="#E9C46A"/>
<rect x="8" y="21.5" width="22" height="5" fill="#E9C46A"/>
<rect x="4.6" y="21" width="4.4" height="6" rx="1.5" fill="#264653" strokeWidth={sw(2.4)}/>
<rect x="14" y="13" width="4" height="9" rx="1.5" fill="#E76F51" strokeWidth={sw(2.2)}/>
<rect x="20" y="13" width="4" height="9" rx="1.5" fill="#E76F51" strokeWidth={sw(2.2)}/>
<rect x="26" y="13" width="4" height="9" rx="1.5" fill="#E76F51" strokeWidth={sw(2.2)}/>

    </svg>
  );
});

TrumpetIcon.displayName = 'TrumpetIcon';

export default TrumpetIcon;
