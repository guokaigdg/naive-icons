import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FolderLockIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M6 16 L6 38 L42 38 L42 18 L22 18 L18 12 L6 12 Z" fill="#E9C46A"/>
<path d="M6 18 L42 18" stroke="#2A2A2A" strokeWidth={sw(2)}/>
<rect x="17" y="24" width="14" height="12" rx="2" fill="#E76F51"/>
<path d="M20 24 L20 21 C20 17 28 17 28 21 L28 24" fill="none" stroke="#264653" strokeWidth={sw(2.5)}/>
<circle cx="24" cy="30" r="1.8" fill="#FAEDCD" stroke="none"/>

    </svg>
  );
});

FolderLockIcon.displayName = 'FolderLockIcon';

export default FolderLockIcon;
