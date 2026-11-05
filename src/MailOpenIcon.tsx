import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MailOpenIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M6 22 L24 10 L42 22 L42 40 L6 40 Z" fill="#F4A6A4"/>
<path d="M6 22 L24 31 L42 22" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<rect x="14" y="29" width="20" height="8" rx="1" fill="#FAEDCD" stroke="none"/>
<path d="M18 33 L30 33" stroke="#2A2A2A" strokeWidth={sw(2)} fill="none"/>

    </svg>
  );
});

MailOpenIcon.displayName = 'MailOpenIcon';

export default MailOpenIcon;
