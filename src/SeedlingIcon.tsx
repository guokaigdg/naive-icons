import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SeedlingIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M24 42 L24 25" stroke="#588157" strokeWidth={sw(4)} fill="none"/>
<path d="M24 25 C 16 25 12 19 13 12 C 20 12 24 17 24 25 Z" fill="#588157"/>
<path d="M24 27 C 32 27 37 22 37 15 C 30 15 25 20 24 27 Z" fill="#2A9D8F"/>
<path d="M10 42 L38 42" stroke="#8B5E3C" strokeWidth={sw(4)} fill="none"/>

    </svg>
  );
});

SeedlingIcon.displayName = 'SeedlingIcon';

export default SeedlingIcon;
