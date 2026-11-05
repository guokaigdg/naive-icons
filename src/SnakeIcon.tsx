import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SnakeIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M12 36 C5 30 9 23 16 25 C23 27 27 21 24 15 C22 11 16 11 14 15" stroke="#588157" strokeWidth={sw(5)} fill="none"/>
<circle cx="12" cy="36" r="3" fill="#588157"/>
<path d="M11 38 L6 39 M14 38 L18 39" stroke="#E76F51" strokeWidth={sw(2)} fill="none"/>

    </svg>
  );
});

SnakeIcon.displayName = 'SnakeIcon';

export default SnakeIcon;
