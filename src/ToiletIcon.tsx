import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ToiletIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="16" y="6" width="16" height="10" rx="2" fill="#FAEDCD"/>
<path d="M12 18 H36 C36 26 34 30 32 33 C30 37 27 40 24 40 C21 40 18 37 16 33 C14 30 12 26 12 18 Z" fill="#FFFFFF"/>
<ellipse cx="24" cy="18" rx="9" ry="2.5" fill="#264653" stroke="none"/>

    </svg>
  );
});

ToiletIcon.displayName = 'ToiletIcon';

export default ToiletIcon;
