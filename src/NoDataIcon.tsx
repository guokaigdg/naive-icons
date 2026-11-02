import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const NoDataIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M8 13 L8 39 L40 39 L40 13 Z" fill="#8B5E3C" stroke="none"/>
<path d="M11 13 L37 13 L33 22 L15 22 Z" fill="#FAEDCD" stroke="none"/>
<path d="M13.2 18 L34.8 18 L33 22 L15 22 Z" fill="#264653" stroke="none"/>
<path d="M20 22 L28 22 L28 39 L20 39 Z" fill="#E76F51" stroke="none"/>
<path d="M11 13 L37 13 L33 22 L15 22 Z" stroke="#2A2A2A" strokeWidth={sw(3)} strokeLinejoin="round" fill="none"/>
<path d="M8 13 L8 39 L40 39 L40 13" stroke="#2A2A2A" strokeWidth={sw(3.5)} fill="none"/>

    </svg>
  );
});

NoDataIcon.displayName = 'NoDataIcon';

export default NoDataIcon;
