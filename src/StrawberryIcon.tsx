import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const StrawberryIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M24 18 C 15.5 18 11.5 24 14.5 30 C 17 34.5 20.5 38 24 39 C 27.5 38 31 34.5 33.5 30 C 36.5 24 32.5 18 24 18 Z" fill="#E76F51"/>
<path d="M16 17.5 L17.5 11 L21 15.5 L24 9.5 L27 15.5 L30.5 11 L32 17.5 Z" fill="#588157"/>
<circle cx="19" cy="23.5" r="1.3" fill="#2A2A2A" stroke="none"/>
<circle cx="24" cy="25.5" r="1.3" fill="#2A2A2A" stroke="none"/>
<circle cx="29" cy="23.5" r="1.3" fill="#2A2A2A" stroke="none"/>
<circle cx="21.5" cy="30" r="1.3" fill="#2A2A2A" stroke="none"/>
<circle cx="26.5" cy="30" r="1.3" fill="#2A2A2A" stroke="none"/>
<circle cx="24" cy="34" r="1.3" fill="#2A2A2A" stroke="none"/>

    </svg>
  );
});

StrawberryIcon.displayName = 'StrawberryIcon';

export default StrawberryIcon;
