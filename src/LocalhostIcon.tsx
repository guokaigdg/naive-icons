import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const LocalhostIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="6" y="11" width="36" height="26" rx="4" fill="#264653"/>
<circle cx="12" cy="17" r="1.8" fill="#E76F51" stroke="none"/>
<circle cx="18" cy="17" r="1.8" fill="#E9C46A" stroke="none"/>
<path d="M12 25 H34 M12 31 H27" stroke="#FAEDCD" strokeWidth={sw(2.4)} fill="none"/>

    </svg>
  );
});

LocalhostIcon.displayName = 'LocalhostIcon';

export default LocalhostIcon;
