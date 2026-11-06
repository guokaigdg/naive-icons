import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PawPrintIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<ellipse cx="24" cy="34" rx="8" ry="6" fill="#8B5E3C"/>
<circle cx="14" cy="24" r="3.6" fill="#8B5E3C"/>
<circle cx="20" cy="18" r="3.6" fill="#8B5E3C"/>
<circle cx="28" cy="18" r="3.6" fill="#8B5E3C"/>
<circle cx="34" cy="24" r="3.6" fill="#8B5E3C"/>

    </svg>
  );
});

PawPrintIcon.displayName = 'PawPrintIcon';

export default PawPrintIcon;
