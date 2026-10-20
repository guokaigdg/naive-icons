import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MusicIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<ellipse cx="16.03" cy="31.97" rx="7.97" ry="5.98" transform="rotate(-15 16.03 31.97)" fill="#E76F51"/>
<ellipse cx="33.96" cy="27.98" rx="7.97" ry="5.98" transform="rotate(-15 33.96 27.98)" fill="#E76F51"/>
<path d="M22.01 14.04 L39.93 10.06 L39.93 27.98" stroke="#2A2A2A" strokeWidth={sw(3)}/>

    </svg>
  );
});

MusicIcon.displayName = 'MusicIcon';

export default MusicIcon;
