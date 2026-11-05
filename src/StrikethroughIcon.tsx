import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const StrikethroughIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M31 14 C28 9 18 10 18 16 C18 21 30 23 30 29 C30 35 19 36 16 31" stroke="#264653" strokeWidth={sw(3)} fill="none"/>
<path d="M12 24 L36 24" stroke="#E76F51" strokeWidth={sw(3)} fill="none"/>

    </svg>
  );
});

StrikethroughIcon.displayName = 'StrikethroughIcon';

export default StrikethroughIcon;
