import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const EarbudsIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M12 16 C12 12 18 12 18 16 C18 19 16 20 16 23 L16 27 C14 27 13 26 13 23 Z" fill="#FAEDCD"/>
<path d="M36 16 C36 12 30 12 30 16 C30 19 32 20 32 23 L32 27 C34 27 35 26 35 23 Z" fill="#FAEDCD"/>
<rect x="17" y="31" width="14" height="9" rx="4" fill="#2A9D8F"/>
<path d="M17 34 L31 34" stroke="#FAEDCD" strokeWidth={sw(2)} fill="none"/>

    </svg>
  );
});

EarbudsIcon.displayName = 'EarbudsIcon';

export default EarbudsIcon;
