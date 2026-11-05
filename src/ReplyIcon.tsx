import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ReplyIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M42 34 C 42 22 34 14 22 14 L12 14" stroke="#2A9D8F" strokeWidth={sw(4)} fill="none"/>
<path d="M6 14 L15 9 L15 19 Z" fill="#E76F51" stroke="none"/>

    </svg>
  );
});

ReplyIcon.displayName = 'ReplyIcon';

export default ReplyIcon;
