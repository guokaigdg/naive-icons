import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BanknoteIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="6" y="13" width="36" height="22" rx="3" fill="#588157"/>
<circle cx="24" cy="24" r="6" fill="#E9C46A" stroke="none"/>
<path d="M24 19 L24 24 L28 28" stroke="#264653" strokeWidth={sw(2.5)} fill="none"/>
<path d="M11 19 L11 29 M37 19 L37 29" stroke="#FAEDCD" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

BanknoteIcon.displayName = 'BanknoteIcon';

export default BanknoteIcon;
