import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const RssIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="12" cy="37" r="3.5" fill="#E76F51" stroke="none"/><path d="M12 26 A11 11 0 0 1 23 37" stroke="#E76F51" strokeWidth={sw(4)} fill="none"/><path d="M12 14 A23 23 0 0 1 35 37" stroke="#E76F51" strokeWidth={sw(4)} fill="none"/>

    </svg>
  );
});

RssIcon.displayName = 'RssIcon';

export default RssIcon;
