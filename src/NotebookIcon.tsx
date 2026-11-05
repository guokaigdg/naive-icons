import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const NotebookIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="13" y="6" width="27" height="36" rx="2" fill="#FAEDCD"/>
<path d="M13 14 L40 14 M13 24 L40 24 M13 34 L40 34" stroke="#E9C46A" strokeWidth={sw(2)} fill="none"/>
<circle cx="10.5" cy="12" r="2" fill="#264653" stroke="none"/>
<circle cx="10.5" cy="22" r="2" fill="#264653" stroke="none"/>
<circle cx="10.5" cy="32" r="2" fill="#264653" stroke="none"/>
<circle cx="10.5" cy="40" r="2" fill="#264653" stroke="none"/>

    </svg>
  );
});

NotebookIcon.displayName = 'NotebookIcon';

export default NotebookIcon;
