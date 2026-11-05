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

<path d="M14 9 C6 19 6 29 14 39" stroke="#8B5E3C" strokeWidth={sw(3.5)} fill="none"/>
<path d="M14 9 L14 39" stroke="#2A2A2A" strokeWidth={sw(2)} fill="none"/>
<path d="M14 24 L40 24" stroke="#264653" strokeWidth={sw(3)} fill="none"/>
<path d="M34 19 L40 24 L34 29" stroke="#264653" strokeWidth={sw(3)} fill="none"/>
<path d="M18 20 L18 24 M18 24 L18 28" stroke="#E76F51" strokeWidth={sw(3)} fill="none"/>

    </svg>
  );
});

ArcheryIcon.displayName = 'ArcheryIcon';

export default ArcheryIcon;
