import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FolderOpenIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M6 14 L6 38 L40 38 L40 18 L22 18 L18 12 L6 12 Z" fill="#E9C46A"/>
<path d="M8 22 L42 22 L34 40 L16 40 Z" fill="#2A9D8F"/>

    </svg>
  );
});

FolderOpenIcon.displayName = 'FolderOpenIcon';

export default FolderOpenIcon;
