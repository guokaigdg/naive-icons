import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BoxingGloveIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M14 10 C10 10 8 14 9 18 L12 30 C13 34 16 37 20 37 L28 37 C34 37 38 34 38 28 L38 20 C38 12 32 8 26 8 Z" fill="#E76F51"/>
<path d="M12 19 C8 21 8 27 12 29 C15 30 17 27 16 24 Z" fill="#E76F51"/>
<path d="M17 37 L31 37" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>

    </svg>
  );
});

BoxingGloveIcon.displayName = 'BoxingGloveIcon';

export default BoxingGloveIcon;
