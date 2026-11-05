import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BarcodeIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="6" y="12" width="3" height="24" fill="#264653" stroke="none"/>
<rect x="11" y="12" width="2" height="24" fill="#264653" stroke="none"/>
<rect x="15" y="12" width="4" height="24" fill="#264653" stroke="none"/>
<rect x="21" y="12" width="2" height="24" fill="#264653" stroke="none"/>
<rect x="25" y="12" width="3" height="24" fill="#264653" stroke="none"/>
<rect x="30" y="12" width="2" height="24" fill="#264653" stroke="none"/>
<rect x="34" y="12" width="4" height="24" fill="#264653" stroke="none"/>
<rect x="40" y="12" width="2" height="24" fill="#264653" stroke="none"/>

    </svg>
  );
});

BarcodeIcon.displayName = 'BarcodeIcon';

export default BarcodeIcon;
