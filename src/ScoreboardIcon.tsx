import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ScoreboardIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="6" y="9" width="36" height="21" rx="3" fill="#264653"/>
<path d="M24 9 L24 30" stroke="#FAEDCD" strokeWidth={sw(2.5)} fill="none"/>
<circle cx="14" cy="19" r="3" fill="#E9C46A" stroke="none"/>
<circle cx="19" cy="19" r="3" fill="#E9C46A" stroke="none"/>
<circle cx="30" cy="19" r="3" fill="#E9C46A" stroke="none"/>
<path d="M14 30 L12 40 M34 30 L36 40" stroke="#2A2A2A" strokeWidth={sw(3)} fill="none"/>

    </svg>
  );
});

ScoreboardIcon.displayName = 'ScoreboardIcon';

export default ScoreboardIcon;
