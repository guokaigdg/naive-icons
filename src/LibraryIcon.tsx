import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const LibraryIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="8" y="10" width="7" height="26" fill="#E76F51"/>
<rect x="17" y="14" width="7" height="22" fill="#2A9D8F"/>
<rect x="26" y="8" width="7" height="28" fill="#E9C46A"/>
<path d="M35 12 L41 14 L37 38 L31 36 Z" fill="#264653"/>
<path d="M6 40 L42 40" stroke="#2A2A2A" strokeWidth={sw(3.5)} fill="none"/>

    </svg>
  );
});

LibraryIcon.displayName = 'LibraryIcon';

export default LibraryIcon;
