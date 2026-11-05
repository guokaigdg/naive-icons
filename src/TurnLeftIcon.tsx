import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const TurnLeftIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M24 40 L24 24 L12 24" stroke="#264653" strokeWidth={sw(4)} fill="none"/>
<path d="M12 24 L18 18 M12 24 L18 30" stroke="#264653" strokeWidth={sw(3)} fill="none"/>

    </svg>
  );
});

TurnLeftIcon.displayName = 'TurnLeftIcon';

export default TurnLeftIcon;
