import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const GripIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="17" cy="14" r="3.5" fill="#264653" stroke="none"/>
<circle cx="31" cy="14" r="3.5" fill="#264653" stroke="none"/>
<circle cx="17" cy="24" r="3.5" fill="#264653" stroke="none"/>
<circle cx="31" cy="24" r="3.5" fill="#264653" stroke="none"/>
<circle cx="17" cy="34" r="3.5" fill="#264653" stroke="none"/>
<circle cx="31" cy="34" r="3.5" fill="#264653" stroke="none"/>

    </svg>
  );
});

GripIcon.displayName = 'GripIcon';

export default GripIcon;
