import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CottonSwabIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="14" y="22" width="20" height="4" rx="2" fill="#8B5E3C"/>
<ellipse cx="11" cy="24" rx="4" ry="6" fill="#FFFFFF"/>
<ellipse cx="37" cy="24" rx="4" ry="6" fill="#FFFFFF"/>

    </svg>
  );
});

CottonSwabIcon.displayName = 'CottonSwabIcon';

export default CottonSwabIcon;
