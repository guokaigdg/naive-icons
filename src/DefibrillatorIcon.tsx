import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const DefibrillatorIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="8" y="12" width="32" height="24" rx="3" fill="#E76F51"/>
<rect x="13" y="17" width="14" height="9" rx="2" fill="#FAEDCD" stroke="none"/>
<path d="M19 19 L17 23 L20 23 L18 27" stroke="#E76F51" strokeWidth={sw(2)} fill="none"/>
<circle cx="34" cy="19" r="3" fill="#E9C46A" stroke="none"/>
<path d="M12 40 L36 40" stroke="#264653" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

DefibrillatorIcon.displayName = 'DefibrillatorIcon';

export default DefibrillatorIcon;
