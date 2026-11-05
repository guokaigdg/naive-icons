import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FilePlusIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M12 6 L12 42 L36 42 L36 18 L24 6 Z" fill="#FAEDCD"/>
<path d="M24 6 L24 18 L36 18" fill="#F4A6A4"/>
<path d="M24 25 L24 34 M20 29.5 L28 29.5" stroke="#2A9D8F" strokeWidth={sw(3.5)} fill="none"/>

    </svg>
  );
});

FilePlusIcon.displayName = 'FilePlusIcon';

export default FilePlusIcon;
