import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ArcheryIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M26 8 C16 17 16 31 26 40" stroke="#8B5E3C" strokeWidth={sw(3.5)} fill="none"/>
<path d="M26 8 L42 24 L26 40" stroke="#2A2A2A" strokeWidth={sw(2)} fill="none"/>
<path d="M8 24 L42 24" stroke="#264653" strokeWidth={sw(3)} fill="none"/>
<path d="M15 17 L8 24 L15 31" stroke="#264653" strokeWidth={sw(3)} fill="none"/>
<path d="M37 24 L42 24" stroke="#E76F51" strokeWidth={sw(4)} fill="none"/>

    </svg>
  );
});

ArcheryIcon.displayName = 'ArcheryIcon';

export default ArcheryIcon;
