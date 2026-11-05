import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FireExtinguisherIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="16" y="18" width="14" height="22" rx="3" fill="#E76F51"/>
<rect x="20" y="12" width="6" height="6" fill="#264653"/>
<path d="M23 12 C23 8 30 8 32 11" fill="none"/>
<path d="M30 22 C36 26 36 32 34 37" fill="none"/>
<rect x="20" y="25" width="6" height="6" fill="#FAEDCD" stroke="none"/>

    </svg>
  );
});

FireExtinguisherIcon.displayName = 'FireExtinguisherIcon';

export default FireExtinguisherIcon;
