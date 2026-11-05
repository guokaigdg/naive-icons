import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FileSpreadsheetIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
<rect x="16" y="22" width="16" height="12" rx="1" fill="#588157" stroke="none"/>
<path d="M16 28 L32 28 M21 22 L21 34 M27 22 L27 34" stroke="#FAEDCD" strokeWidth={sw(1.8)} fill="none"/>

    </svg>
  );
});

FileSpreadsheetIcon.displayName = 'FileSpreadsheetIcon';

export default FileSpreadsheetIcon;
