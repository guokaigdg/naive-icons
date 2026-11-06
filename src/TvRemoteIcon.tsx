import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const TvRemoteIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M15 13 C15 9 17 7 24 7 C31 7 33 9 33 13 L33 36 C33 40 31 42 24 42 C17 42 15 40 15 36 Z" fill="#264653"/>
<circle cx="24" cy="12" r="2.2" fill="#E76F51" stroke="none"/>
<rect x="19" y="17" width="10" height="8" rx="2" fill="#E9C46A" stroke="none"/>
<circle cx="20.5" cy="31" r="2" fill="#FAEDCD" stroke="none"/>
<circle cx="28" cy="31" r="2" fill="#FAEDCD" stroke="none"/>
<circle cx="20.5" cy="37" r="2" fill="#FAEDCD" stroke="none"/>
<circle cx="28" cy="37" r="2" fill="#FAEDCD" stroke="none"/>

    </svg>
  );
});

TvRemoteIcon.displayName = 'TvRemoteIcon';

export default TvRemoteIcon;
