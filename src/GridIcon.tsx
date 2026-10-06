import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const GridIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="6" y="6" width="16" height="16" rx="3.5" fill="#2A9D8F"/>
<rect x="26" y="6" width="16" height="16" rx="3.5" fill="#E9C46A"/>
<rect x="6" y="26" width="16" height="16" rx="3.5" fill="#E76F51"/>
<rect x="26" y="26" width="16" height="16" rx="3.5" fill="#264653"/>

    </svg>
  );
});

GridIcon.displayName = 'GridIcon';

export default GridIcon;

