import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const UTurnIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M16 40 L16 22 C16 14 32 14 32 22 L32 34" stroke="#264653" strokeWidth={sw(4)} fill="none"/>
<path d="M32 34 L26 28 M32 34 L38 28" stroke="#264653" strokeWidth={sw(3)} fill="none"/>

    </svg>
  );
});

UTurnIcon.displayName = 'UTurnIcon';

export default UTurnIcon;
