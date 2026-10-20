import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PowerIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M16 17 A12 12 0 1 0 32 17" stroke="#E76F51" strokeWidth={sw(4.5)} fill="none"/><path d="M24 8 L24 22" stroke="#2A2A2A" strokeWidth={sw(4.5)} fill="none"/>

    </svg>
  );
});

PowerIcon.displayName = 'PowerIcon';

export default PowerIcon;
