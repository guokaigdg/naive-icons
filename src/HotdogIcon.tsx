import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const HotdogIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="10" y="27" width="28" height="10" rx="5" fill="#E9C46A"/>
<rect x="9" y="17.5" width="30" height="12" rx="6" fill="#E76F51"/>
<path d="M14 22 L17.5 25 L21 22 L24.5 25 L28 22 L31.5 25 L34 22.5" stroke="#FAEDCD" strokeWidth={sw(2.4)} fill="none"/>

    </svg>
  );
});

HotdogIcon.displayName = 'HotdogIcon';

export default HotdogIcon;
