import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const QueueIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="7" y="17" width="10" height="14" rx="2" fill="#E9C46A"/>
<rect x="19" y="17" width="10" height="14" rx="2" fill="#2A9D8F"/>
<rect x="31" y="17" width="10" height="14" rx="2" fill="#E76F51"/>
<path d="M10 22 H14 M10 26 H14 M22 22 H26 M22 26 H26 M34 22 H38 M34 26 H38" stroke="#FFFFFF" strokeWidth={sw(1.8)} fill="none"/>

    </svg>
  );
});

QueueIcon.displayName = 'QueueIcon';

export default QueueIcon;
