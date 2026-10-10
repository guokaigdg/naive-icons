import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ChargerIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="11" y="14" width="26" height="26" rx="5" fill="#E76F51"/>
<path d="M19 14 L19 8 M29 14 L29 8" strokeWidth={sw(3.5)}/>
<circle cx="24" cy="27" r="6" fill="none" stroke="#FAEDCD" strokeWidth={sw(3)}/>

    </svg>
  );
});

ChargerIcon.displayName = 'ChargerIcon';

export default ChargerIcon;
