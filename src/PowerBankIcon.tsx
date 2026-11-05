import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PowerBankIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="12" y="8" width="24" height="34" rx="3" fill="#264653"/>
<rect x="17" y="13" width="14" height="8" rx="2" fill="#2A9D8F" stroke="none"/>
<rect x="18" y="28" width="5" height="6" fill="#FAEDCD" stroke="none"/>
<rect x="25" y="28" width="5" height="6" fill="#FAEDCD" stroke="none"/>
<path d="M20 38 L28 38" stroke="#FAEDCD" strokeWidth={sw(2)} fill="none"/>

    </svg>
  );
});

PowerBankIcon.displayName = 'PowerBankIcon';

export default PowerBankIcon;
