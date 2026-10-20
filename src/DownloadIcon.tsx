import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const DownloadIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M24 8.64 L24 31.68" stroke="#2A2A2A" strokeWidth={sw(4)}/>
<path d="M14.4 24 L24 33.6 L33.6 24" fill="#2A9D8F"/>
<rect x="8.64" y="37.44" width="30.72" height="5.76" rx="1.92" fill="#E76F51"/>

    </svg>
  );
});

DownloadIcon.displayName = 'DownloadIcon';

export default DownloadIcon;
