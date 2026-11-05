import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PlaylistIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M8 13 L28 13 M8 21 L28 21 M8 29 L22 29" stroke="#264653" strokeWidth={sw(3)} fill="none"/>
<circle cx="34" cy="34" r="4" fill="#E76F51"/>
<path d="M38 34 L38 22 L43 24" stroke="#E76F51" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

PlaylistIcon.displayName = 'PlaylistIcon';

export default PlaylistIcon;
