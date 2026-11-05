import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ChurchIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M24 6 L24 14 M20 10 L28 10" stroke="#264653" strokeWidth={sw(2.5)} fill="none"/>
<path d="M10 26 L24 12 L38 26 Z" fill="#E76F51"/>
<rect x="12" y="26" width="24" height="15" fill="#FFFFFF"/>
<path d="M24 32 C21 32 20 34 20 37 L20 41 L28 41 L28 37 C28 34 27 32 24 32 Z" fill="#264653" stroke="none"/>

    </svg>
  );
});

ChurchIcon.displayName = 'ChurchIcon';

export default ChurchIcon;
