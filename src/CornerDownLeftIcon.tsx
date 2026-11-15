import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CornerDownLeftIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M38 10 L16 10 L16 30" stroke="#2A2A2A" strokeWidth={sw(4)} fill="none"/>
<path d="M16 35.5 L21.4 28.8 L10.6 28.8 Z" fill="#E76F51"/>

    </svg>
  );
});

CornerDownLeftIcon.displayName = 'CornerDownLeftIcon';

export default CornerDownLeftIcon;
