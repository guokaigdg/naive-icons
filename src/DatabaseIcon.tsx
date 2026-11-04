import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const DatabaseIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M11 13 L11 34 C 11 38 17 41 24 41 C 31 41 37 38 37 34 L37 13 Z" fill="#2A9D8F"/>
<ellipse cx="24" cy="13" rx="13" ry="5.5" fill="#264653"/>
<path d="M11 24 C 11 28 17 31 24 31 C 31 31 37 28 37 24" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

DatabaseIcon.displayName = 'DatabaseIcon';

export default DatabaseIcon;
