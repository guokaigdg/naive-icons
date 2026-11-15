import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PanelTopIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="6" y="9" width="36" height="30" rx="4" fill="#FAEDCD"/>
<path d="M6 18 L42 18 L42 13 C42 10.8 40.2 9 38 9 L10 9 C7.8 9 6 10.8 6 13 Z" fill="#E76F51"/>
<rect x="11" y="24" width="14" height="5" rx="2" fill="#264653" stroke="none"/>
<rect x="11" y="32" width="9" height="5" rx="2" fill="#2A9D8F" stroke="none"/>

    </svg>
  );
});

PanelTopIcon.displayName = 'PanelTopIcon';

export default PanelTopIcon;
