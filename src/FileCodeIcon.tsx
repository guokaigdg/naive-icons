import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FileCodeIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
<path d="M20 24 L16 29 L20 34" stroke="#2A9D8F" strokeWidth={sw(3)} fill="none"/>
<path d="M28 24 L32 29 L28 34" stroke="#2A9D8F" strokeWidth={sw(3)} fill="none"/>
<path d="M26 22 L22 36" stroke="#E76F51" strokeWidth={sw(3)} fill="none"/>

    </svg>
  );
});

FileCodeIcon.displayName = 'FileCodeIcon';

export default FileCodeIcon;
