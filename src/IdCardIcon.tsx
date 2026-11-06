import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const IdCardIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="8" y="11" width="32" height="26" rx="4" fill="#FAEDCD"/>
<circle cx="17" cy="20" r="4" fill="#264653"/>
<path d="M11 29 C13 26 16 25 17 25 C19 25 22 26 23 29" fill="#264653" stroke="#264653" strokeWidth={sw(1)}/>
<path d="M28 18 L36 18 M28 23 L36 23 M28 28 L33 28" stroke="#2A2A2A" strokeWidth={sw(2)} fill="none"/>
<path d="M8 37 L40 37" stroke="#2A9D8F" strokeWidth={sw(3)} fill="none"/>

    </svg>
  );
});

IdCardIcon.displayName = 'IdCardIcon';

export default IdCardIcon;
