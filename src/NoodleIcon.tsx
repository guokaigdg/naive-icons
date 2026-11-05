import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const NoodleIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M8 24 L40 24 C40 34 34 40 24 40 C14 40 8 34 8 24 Z" fill="#E76F51"/>
<path d="M20 20 C18 16 22 14 20 10 M28 20 C26 16 30 14 28 10" stroke="#2A9D8F" strokeWidth={sw(3)} fill="none"/>
<path d="M30 20 L42 6 M25 20 L37 6" stroke="#8B5E3C" strokeWidth={sw(3)} fill="none"/>

    </svg>
  );
});

NoodleIcon.displayName = 'NoodleIcon';

export default NoodleIcon;
