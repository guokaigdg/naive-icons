import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SofaIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="8" y="14" width="32" height="12" rx="4" fill="#588157"/>
<rect x="6" y="24" width="36" height="14" rx="5" fill="#2A9D8F"/>
<rect x="10" y="26" width="12" height="8" rx="3" fill="#E9C46A" stroke="none"/>
<rect x="26" y="26" width="12" height="8" rx="3" fill="#E9C46A" stroke="none"/>
<path d="M10 38 L10 41 M38 38 L38 41" stroke="#8B5E3C" strokeWidth={sw(3)} fill="none"/>

    </svg>
  );
});

SofaIcon.displayName = 'SofaIcon';

export default SofaIcon;
