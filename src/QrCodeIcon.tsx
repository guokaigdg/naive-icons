import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const QrCodeIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="6" y="6" width="14" height="14" rx="3" fill="#264653"/>
<rect x="28" y="6" width="14" height="14" rx="3" fill="#264653"/>
<rect x="6" y="28" width="14" height="14" rx="3" fill="#264653"/>
<rect x="10" y="10" width="6" height="6" rx="1.5" fill="#E9C46A" stroke="none"/>
<rect x="32" y="10" width="6" height="6" rx="1.5" fill="#E9C46A" stroke="none"/>
<rect x="10" y="32" width="6" height="6" rx="1.5" fill="#E9C46A" stroke="none"/>
<rect x="28" y="28" width="7" height="7" rx="2" fill="#2A9D8F" stroke="none"/>
<rect x="38" y="28" width="4" height="4" rx="1.2" fill="#2A9D8F" stroke="none"/>
<rect x="28" y="38" width="4" height="4" rx="1.2" fill="#2A9D8F" stroke="none"/>

    </svg>
  );
});

QrCodeIcon.displayName = 'QrCodeIcon';

export default QrCodeIcon;
