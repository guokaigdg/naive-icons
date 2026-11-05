import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SpeakerIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="12" y="6" width="24" height="36" rx="4" fill="#264653"/>
<circle cx="24" cy="15" r="4" fill="#E9C46A" stroke="none"/>
<circle cx="24" cy="29" r="8" fill="#FAEDCD"/>
<circle cx="24" cy="29" r="3" fill="#264653" stroke="none"/>

    </svg>
  );
});

SpeakerIcon.displayName = 'SpeakerIcon';

export default SpeakerIcon;
