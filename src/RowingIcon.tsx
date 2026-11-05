import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const RowingIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M7 25 L41 25 L35 34 L13 34 Z" fill="#E76F51"/>
<path d="M12 10 L30 27" stroke="#264653" strokeWidth={sw(3)} fill="none"/>
<path d="M36 10 L18 27" stroke="#264653" strokeWidth={sw(3)} fill="none"/>
<path d="M8 39 L40 39" stroke="#2A9D8F" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

RowingIcon.displayName = 'RowingIcon';

export default RowingIcon;
