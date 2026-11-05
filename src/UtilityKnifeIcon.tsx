import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const UtilityKnifeIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<g transform="rotate(-30 18 30)">
<rect x="8" y="26" width="20" height="8" rx="3" fill="#264653"/>
</g>
<path d="M26 24 L40 12 L42 16 L30 30 Z" fill="#FAEDCD"/>

    </svg>
  );
});

UtilityKnifeIcon.displayName = 'UtilityKnifeIcon';

export default UtilityKnifeIcon;
