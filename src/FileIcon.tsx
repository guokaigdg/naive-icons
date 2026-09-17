import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const FileIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const labelled = Boolean(props.title || props['aria-label'] || props.role);
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
<path d="M16 26 L32 26" stroke="#2A2A2A" stroke-width="2"/>
<path d="M16 32 L28 32" stroke="#2A2A2A" stroke-width="2"/>

  
    </svg>
  );
});

FileIcon.displayName = 'FileIcon';

export default FileIcon;
