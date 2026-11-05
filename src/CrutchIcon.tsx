import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CrutchIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M16 10 L32 10" stroke="#E76F51" strokeWidth={sw(3)} fill="none"/>
<path d="M16 10 L16 24 L24 24 L24 40" stroke="#264653" strokeWidth={sw(4)} fill="none"/>
<path d="M12 40 L36 40" stroke="#264653" strokeWidth={sw(3)} fill="none"/>

    </svg>
  );
});

CrutchIcon.displayName = 'CrutchIcon';

export default CrutchIcon;
