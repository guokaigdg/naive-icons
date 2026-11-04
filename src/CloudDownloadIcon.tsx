import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CloudDownloadIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M13 22 C 7 22 5 15 11 13 C 11 7 19 5 23 9 C 27 3 37 7 35 15 C 41 15 41 22 35 22 Z" fill="#FAEDCD"/>
<path d="M24 26 L24 38" stroke="#2A9D8F" strokeWidth={sw(4)} fill="none"/>
<path d="M15 32 L24 41 L33 32 Z" fill="#2A9D8F" stroke="none"/>

    </svg>
  );
});

CloudDownloadIcon.displayName = 'CloudDownloadIcon';

export default CloudDownloadIcon;
