import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const IndentIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M14 10 L38 10 M14 18 L38 18 M14 30 L38 30 M14 38 L38 38" stroke="#264653" strokeWidth={sw(3)} fill="none"/>
<path d="M6 18 L16 24 L6 30" stroke="#E76F51" strokeWidth={sw(3)} fill="none"/>

    </svg>
  );
});

IndentIcon.displayName = 'IndentIcon';

export default IndentIcon;
