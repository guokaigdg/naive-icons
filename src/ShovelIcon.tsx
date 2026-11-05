import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ShovelIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M24 10 L24 26" stroke="#8B5E3C" strokeWidth={sw(4)} fill="none"/>
<path d="M19 10 L29 10" stroke="#8B5E3C" strokeWidth={sw(4)} fill="none"/>
<path d="M18 26 L30 26 L30 34 C30 38 24 42 24 42 C24 42 18 38 18 34 Z" fill="#2A9D8F"/>

    </svg>
  );
});

ShovelIcon.displayName = 'ShovelIcon';

export default ShovelIcon;
