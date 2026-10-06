import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const VolumeXIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M5.8 19 L12.8 19 L21 10 L21 38 L12.8 29 L5.8 29 Z" fill="#2A9D8F"/>
<path d="M28 18.5 L37 27.5 M37 18.5 L28 27.5" stroke="#E76F51" strokeWidth={sw(4.5)}/>

    </svg>
  );
});

VolumeXIcon.displayName = 'VolumeXIcon';

export default VolumeXIcon;

