import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MailLockIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="6" y="11" width="36" height="23" rx="3" fill="#FAEDCD"/>
<path d="M6 14 L24 26 L42 14" stroke="#264653" strokeWidth={sw(2.5)} fill="none"/>
<rect x="29" y="29" width="12" height="10" rx="2" fill="#E9C46A"/>
<path d="M32 29 L32 25 C32 21 38 21 38 25 L38 29" stroke="#264653" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

MailLockIcon.displayName = 'MailLockIcon';

export default MailLockIcon;
