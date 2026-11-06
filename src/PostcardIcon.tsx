import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PostcardIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="7" y="13" width="34" height="24" rx="3" fill="#FAEDCD"/>
<path d="M22 17 L22 37" stroke="#264653" strokeWidth={sw(2)} fill="none"/>
<rect x="28" y="16" width="9" height="7" fill="#E76F51"/>
<path d="M13 21 L19 21 M13 26 L19 26 M13 31 L17 31" stroke="#2A2A2A" strokeWidth={sw(2)} fill="none"/>
<path d="M27 25 L37 25 M27 30 L35 30" stroke="#2A2A2A" strokeWidth={sw(2)} fill="none"/>
<path d="M25 19 C27 18 29 20 31 19 C33 18 35 20 37 19" stroke="#264653" strokeWidth={sw(1.5)} fill="none"/>

    </svg>
  );
});

PostcardIcon.displayName = 'PostcardIcon';

export default PostcardIcon;
