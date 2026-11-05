import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FileImageIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M12 7 L28 7 L38 17 L38 41 L12 41 Z" fill="#FAEDCD"/>
<path d="M28 7 L28 17 L38 17" fill="none" stroke="#2A2A2A"/>
<circle cx="20" cy="24" r="3" fill="#E9C46A" stroke="none"/>
<path d="M14 38 L22 28 L29 35 L33 31 L37 38" fill="#2A9D8F" stroke="none"/>

    </svg>
  );
});

FileImageIcon.displayName = 'FileImageIcon';

export default FileImageIcon;
