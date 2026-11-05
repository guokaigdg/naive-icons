import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FilesIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="8" y="8" width="24" height="30" rx="3" fill="#F4A6A4"/>
<path d="M16 14 L16 42 L38 42 L38 22 L30 14 Z" fill="#FAEDCD"/>
<path d="M30 14 L30 22 L38 22" fill="#E9C46A"/>
<path d="M21 28 L33 28" stroke="#2A2A2A" strokeWidth={sw(2)} fill="none"/>
<path d="M21 34 L33 34" stroke="#2A2A2A" strokeWidth={sw(2)} fill="none"/>

    </svg>
  );
});

FilesIcon.displayName = 'FilesIcon';

export default FilesIcon;
