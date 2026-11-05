import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CocktailIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M8 10 L40 10 L24 27 Z" fill="#F4A6A4"/>
<path d="M24 27 L24 40 M15 40 L33 40" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<circle cx="31" cy="15" r="2.5" fill="#588157" stroke="none"/>

    </svg>
  );
});

CocktailIcon.displayName = 'CocktailIcon';

export default CocktailIcon;
