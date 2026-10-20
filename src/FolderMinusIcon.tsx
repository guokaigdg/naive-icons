import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FolderMinusIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M7 16 L7 38 L36 38 L36 18 L22 18 L18 12 L7 12 Z" fill="#E9C46A"/><path d="M7 18 L36 18" stroke="#2A2A2A" strokeWidth={sw(2)} fill="none"/><path d="M34 31 L42 31" stroke="#E76F51" strokeWidth={sw(4.5)} fill="none"/>

    </svg>
  );
});

FolderMinusIcon.displayName = 'FolderMinusIcon';

export default FolderMinusIcon;
