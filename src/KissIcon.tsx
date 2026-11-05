import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const KissIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="24" cy="24" r="16" fill="#F4A6A4"/>
<circle cx="18" cy="20" r="1.7" fill="#2A2A2A" stroke="none"/>
<circle cx="30" cy="20" r="1.7" fill="#2A2A2A" stroke="none"/>
<path d="M20 30 C22 33 26 33 28 30" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>
<path d="M36 12 C34 10 31 12 33 15 L36 18 L39 15 C41 12 38 10 36 12 Z" fill="#E76F51" stroke="none"/>

    </svg>
  );
});

KissIcon.displayName = 'KissIcon';

export default KissIcon;
