import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CuttingBoardIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="7" y="10" width="32" height="30" rx="5" fill="#8B5E3C"/>
<circle cx="13" cy="16" r="2.2" fill="#FFFFFF" strokeWidth={sw(2)}/>
<g transform="rotate(-22 24 25)">
<rect x="12" y="22" width="10" height="6" rx="3" fill="#264653"/>
<path d="M21 20 L33 20 C 35.5 20 37 22 36.5 24.5 C 34.5 26 31 26 27 26 L21 26 Z" fill="#FFFFFF" strokeWidth={sw(2.4)}/>
<path d="M21 20 L21 26" stroke="#2A2A2A" strokeWidth={sw(1.8)}/>
</g>

    </svg>
  );
});

CuttingBoardIcon.displayName = 'CuttingBoardIcon';

export default CuttingBoardIcon;
