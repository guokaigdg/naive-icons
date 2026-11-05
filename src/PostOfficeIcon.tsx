import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PostOfficeIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M5 18 L24 7 L43 18 Z" fill="#E76F51"/>
<rect x="7" y="18" width="34" height="22" rx="3" fill="#FAEDCD"/>
<path d="M7 21 L24 33 L41 21" stroke="#264653" strokeWidth={sw(2.5)} fill="none"/>
<path d="M12 40 L36 40" stroke="#264653" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

PostOfficeIcon.displayName = 'PostOfficeIcon';

export default PostOfficeIcon;
