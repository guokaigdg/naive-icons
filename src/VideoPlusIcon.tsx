import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const VideoPlusIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="4.8" y="14.4" width="26.88" height="19.2" rx="3.84" fill="#264653"/>
<path d="M31.68 21.12 L43.2 14.4 L43.2 33.6 L31.68 26.88 Z" fill="#E76F51"/>
<path d="M18.24 19.2 L18.24 28.8 M13.44 24 L23.04 24" stroke="#FAEDCD" strokeWidth={sw(3.5)}/>

    </svg>
  );
});

VideoPlusIcon.displayName = 'VideoPlusIcon';

export default VideoPlusIcon;
