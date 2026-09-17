import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const ExternalLinkIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const labelled = Boolean(props.title || props['aria-label'] || props.role);
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
      
<rect x="9" y="9" width="20" height="20" rx="3" fill="none" stroke="#2A2A2A" stroke-width="3.5"/>
<path d="M21 27 L 35 13" fill="none" stroke="#2A2A2A" stroke-width="3.5"/>
<path d="M35 13 L 35 22" fill="none" stroke="#2A2A2A" stroke-width="3.5"/>
<path d="M35 13 L 26 13" fill="none" stroke="#2A2A2A" stroke-width="3.5"/>

    </svg>
  );
});

ExternalLinkIcon.displayName = 'ExternalLinkIcon';

export default ExternalLinkIcon;
