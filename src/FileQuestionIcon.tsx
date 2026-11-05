import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FileQuestionIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
<path d="M28 7 L28 17 L38 17" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>
<path d="M21 23 C21 17 29 17 29 23 C29 26 25 26 25 29" stroke="#2A9D8F" strokeWidth={sw(3)} fill="none"/>
<circle cx="25" cy="35" r="1.8" fill="#2A9D8F" stroke="none"/>

    </svg>
  );
});

FileQuestionIcon.displayName = 'FileQuestionIcon';

export default FileQuestionIcon;
