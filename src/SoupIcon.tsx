import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SoupIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M7 22 L41 22 C41 33 34 40 24 40 C14 40 7 33 7 22 Z" fill="#E76F51"/>
<ellipse cx="24" cy="22" rx="15" ry="3" fill="#FAEDCD" stroke="none"/>
<path d="M18 16 C16 13 20 11 18 8 M27 16 C25 13 29 11 27 8" stroke="#2A9D8F" strokeWidth={sw(3)} fill="none"/>

    </svg>
  );
});

SoupIcon.displayName = 'SoupIcon';

export default SoupIcon;
