import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BaseballIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="24" cy="24" r="17" fill="#FFFFFF"/>
<path d="M14 12 C19 18 19 30 14 36" stroke="#E76F51" strokeWidth={sw(2.5)} fill="none"/>
<path d="M34 12 C29 18 29 30 34 36" stroke="#E76F51" strokeWidth={sw(2.5)} fill="none"/>
<path d="M14 18 L17 20 M14 24 L17 24 M14 30 L17 30" stroke="#E76F51" strokeWidth={sw(2)} fill="none"/>
<path d="M34 18 L31 20 M34 24 L31 24 M34 30 L31 30" stroke="#E76F51" strokeWidth={sw(2)} fill="none"/>

    </svg>
  );
});

BaseballIcon.displayName = 'BaseballIcon';

export default BaseballIcon;
