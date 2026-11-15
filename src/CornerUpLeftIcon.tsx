import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CornerUpLeftIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M38 38 L16 38 L16 18" stroke="#2A2A2A" strokeWidth={sw(4)} fill="none"/>
<path d="M16 12.5 L21.4 19.2 L10.6 19.2 Z" fill="#E76F51"/>

    </svg>
  );
});

CornerUpLeftIcon.displayName = 'CornerUpLeftIcon';

export default CornerUpLeftIcon;
