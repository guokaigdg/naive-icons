import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const DeskIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="5" y="19" width="38" height="6" rx="2" fill="#8B5E3C"/>
<path d="M10 25 L10 41 M38 25 L38 41" stroke="#8B5E3C" strokeWidth={sw(3.5)} fill="none"/>
<rect x="26" y="28" width="12" height="9" rx="2" fill="#FAEDCD"/>
<path d="M30 32 L34 32" stroke="#264653" strokeWidth={sw(2)} fill="none"/>

    </svg>
  );
});

DeskIcon.displayName = 'DeskIcon';

export default DeskIcon;
