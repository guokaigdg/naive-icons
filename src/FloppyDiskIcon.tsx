import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FloppyDiskIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="8" y="8" width="32" height="32" rx="3" fill="#264653"/>
<rect x="17" y="8" width="14" height="11" fill="#E9C46A"/>
<rect x="25.5" y="9.5" width="3.5" height="8" fill="#264653" stroke="none"/>
<rect x="13" y="24" width="22" height="11" rx="1.5" fill="#FAEDCD"/>
<path d="M17 28 H31 M17 31.5 H27" stroke="#264653" strokeWidth={sw(1.6)} fill="none"/>

    </svg>
  );
});

FloppyDiskIcon.displayName = 'FloppyDiskIcon';

export default FloppyDiskIcon;
