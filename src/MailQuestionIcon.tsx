import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MailQuestionIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
<circle cx="35" cy="34" r="5.5" fill="#E76F51"/>
<path d="M33 32.5 C33 30.5 37 30.5 37 32.5 C37 34 35 34 35 35" stroke="#FAEDCD" strokeWidth={sw(2)} fill="none"/>
<circle cx="35" cy="37" r="1.2" fill="#FAEDCD" stroke="none"/>

    </svg>
  );
});

MailQuestionIcon.displayName = 'MailQuestionIcon';

export default MailQuestionIcon;
