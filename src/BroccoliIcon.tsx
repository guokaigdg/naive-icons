import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BroccoliIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M24 32 L24 41" stroke="#588157" strokeWidth={sw(4.5)} fill="none"/>
<path d="M12 23 C12 17 17 15 20 17 C21 11 28 10 31 14 C36 13 38 18 35 23 C38 25 36 30 31 30 C30 34 25 35 22 32 C18 35 12 33 12 28 Z" fill="#588157"/>
<path d="M18 22 L17 26 M24 19 L24 24 M30 21 L31 25" stroke="#FAEDCD" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

BroccoliIcon.displayName = 'BroccoliIcon';

export default BroccoliIcon;
