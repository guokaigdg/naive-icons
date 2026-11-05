import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ScrewdriverIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="16" y="6" width="12" height="14" rx="4" fill="#E76F51"/>
<rect x="20" y="20" width="4" height="16" fill="#264653"/>
<path d="M19 36 L25 36 L24 42 L20 42 Z" fill="#E9C46A"/>
<path d="M18 11 L26 11" stroke="#FAEDCD" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

ScrewdriverIcon.displayName = 'ScrewdriverIcon';

export default ScrewdriverIcon;
