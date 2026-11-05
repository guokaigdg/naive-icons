import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BinderIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="7" y="7" width="34" height="34" rx="2" fill="#264653"/>
<rect x="18" y="15" width="19" height="8" rx="2" fill="#FAEDCD" stroke="none"/>
<path d="M21 27 L36 27" stroke="#FAEDCD" strokeWidth={sw(2.5)} fill="none"/>
<circle cx="12" cy="14" r="2.5" fill="#E9C46A" stroke="none"/>
<circle cx="12" cy="24" r="2.5" fill="#E9C46A" stroke="none"/>
<circle cx="12" cy="34" r="2.5" fill="#E9C46A" stroke="none"/>

    </svg>
  );
});

BinderIcon.displayName = 'BinderIcon';

export default BinderIcon;
