import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MailCheckIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="6" y="13" width="36" height="24" rx="3" fill="#F4A6A4"/>
<path d="M8 15 L24 28 L40 15" stroke="#2A2A2A" fill="none"/>
<circle cx="37" cy="11" r="5.5" fill="#588157"/>
<path d="M34 11 L36 13 L40 8" stroke="#FFFFFF" strokeWidth={sw(2)} fill="none"/>

    </svg>
  );
});

MailCheckIcon.displayName = 'MailCheckIcon';

export default MailCheckIcon;
