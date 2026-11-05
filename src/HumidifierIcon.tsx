import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const HumidifierIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M12 22 C12 15 17 11 24 11 C31 11 36 15 36 22 V38 C36 40 34 42 30 42 H18 C14 42 12 40 12 38 Z" fill="#2A9D8F"/>
<path d="M20 11 C18 8 22 8 20 5" stroke="#FAEDCD" strokeWidth={sw(2)} fill="none"/>
<path d="M28 11 C26 8 30 8 28 5" stroke="#FAEDCD" strokeWidth={sw(2)} fill="none"/>
<path d="M20 26 C18 30 22 32 20 36" stroke="#FAEDCD" strokeWidth={sw(2)} fill="none"/>

    </svg>
  );
});

HumidifierIcon.displayName = 'HumidifierIcon';

export default HumidifierIcon;
