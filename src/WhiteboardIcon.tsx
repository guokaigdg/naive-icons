import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const WhiteboardIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="6" y="6" width="36" height="25" rx="2" fill="#FFFFFF"/>
<path d="M12 15 L20 15 M12 21 L26 21 M31 12 C35 12 35 20 31 20" stroke="#2A9D8F" strokeWidth={sw(2.5)} fill="none"/>
<path d="M12 31 L12 41 M36 31 L36 41" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>
<path d="M10 35 L38 35" stroke="#E76F51" strokeWidth={sw(3)} fill="none"/>

    </svg>
  );
});

WhiteboardIcon.displayName = 'WhiteboardIcon';

export default WhiteboardIcon;
