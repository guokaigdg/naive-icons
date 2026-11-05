import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BowlingIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="18" cy="29" r="11" fill="#264653"/>
<circle cx="14" cy="25" r="1.8" fill="#FAEDCD" stroke="none"/>
<circle cx="18" cy="23" r="1.8" fill="#FAEDCD" stroke="none"/>
<circle cx="22" cy="25" r="1.8" fill="#FAEDCD" stroke="none"/>
<path d="M34 8 L38 8 L37 18 L40 24 L36 32 L33 32 L30 24 L33 18 Z" fill="#FAEDCD"/>

    </svg>
  );
});

BowlingIcon.displayName = 'BowlingIcon';

export default BowlingIcon;
