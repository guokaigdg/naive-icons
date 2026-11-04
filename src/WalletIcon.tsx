import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const WalletIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="12" y="8" width="20" height="12" rx="3" fill="#FAEDCD"/>
<rect x="6" y="16" width="36" height="22" rx="4" fill="#8B5E3C"/>
<rect x="29" y="23" width="13" height="8" rx="3" fill="#E9C46A"/>

    </svg>
  );
});

WalletIcon.displayName = 'WalletIcon';

export default WalletIcon;
