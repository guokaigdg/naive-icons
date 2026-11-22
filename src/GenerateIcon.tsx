import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const GenerateIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M18 8 L22 17 L31 21 L22 25 L18 34 L14 25 L5 21 L14 17 Z" fill="#E9C46A" stroke="none"/>
<path d="M35 27 L37.5 32 L42.5 34 L37.5 36 L35 41 L32.5 36 L27.5 34 L32.5 32 Z" fill="#E76F51" stroke="none"/>

    </svg>
  );
});

GenerateIcon.displayName = 'GenerateIcon';

export default GenerateIcon;
