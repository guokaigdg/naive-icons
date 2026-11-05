import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ZooIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M8 40 L8 20 C8 12 40 12 40 20 L40 40" fill="#E76F51"/>
<path d="M16 40 L16 26 L32 26 L32 40" fill="#FAEDCD" stroke="none"/>
<circle cx="24" cy="18" r="3" fill="#264653" stroke="none"/>
<circle cx="18" cy="15" r="1.6" fill="#264653" stroke="none"/>
<circle cx="30" cy="15" r="1.6" fill="#264653" stroke="none"/>

    </svg>
  );
});

ZooIcon.displayName = 'ZooIcon';

export default ZooIcon;
