import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FileSearchIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
<circle cx="27" cy="30" r="6.5" fill="#FFFFFF" stroke="#2A9D8F" strokeWidth={sw(3)}/>
<path d="M32 35 L38 41" stroke="#2A9D8F" strokeWidth={sw(3.5)}/>

    </svg>
  );
});

FileSearchIcon.displayName = 'FileSearchIcon';

export default FileSearchIcon;
