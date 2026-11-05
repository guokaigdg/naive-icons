import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FileCabinetIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="11" y="5" width="26" height="38" rx="3" fill="#264653"/>
<rect x="15" y="9" width="18" height="9" rx="2" fill="#FAEDCD" stroke="none"/>
<rect x="15" y="20" width="18" height="9" rx="2" fill="#FAEDCD" stroke="none"/>
<rect x="15" y="31" width="18" height="9" rx="2" fill="#FAEDCD" stroke="none"/>
<path d="M21 13 L27 13 M21 24 L27 24 M21 35 L27 35" stroke="#264653" strokeWidth={sw(2)} fill="none"/>

    </svg>
  );
});

FileCabinetIcon.displayName = 'FileCabinetIcon';

export default FileCabinetIcon;
