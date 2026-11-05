import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FirstAidIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="8" y="14" width="32" height="26" rx="3" fill="#FFFFFF"/>
<path d="M18 14 L18 10 C18 8 30 8 30 10 L30 14" stroke="#2A2A2A" fill="none"/>
<rect x="21" y="20" width="6" height="14" fill="#E76F51" stroke="none"/>
<rect x="17" y="24" width="14" height="6" fill="#E76F51" stroke="none"/>

    </svg>
  );
});

FirstAidIcon.displayName = 'FirstAidIcon';

export default FirstAidIcon;
