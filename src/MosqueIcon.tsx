import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MosqueIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M16 24 C16 14 32 14 32 24" fill="#2A9D8F"/>
<rect x="14" y="24" width="20" height="16" fill="#FAEDCD"/>
<rect x="6" y="14" width="5" height="26" fill="#E76F51"/>
<rect x="37" y="14" width="5" height="26" fill="#E76F51"/>
<circle cx="8.5" cy="12" r="2.5" fill="#E9C46A" stroke="none"/>
<circle cx="39.5" cy="12" r="2.5" fill="#E9C46A" stroke="none"/>
<path d="M20 40 V32 C20 28 28 28 28 32 V40" fill="#264653" stroke="none"/>

    </svg>
  );
});

MosqueIcon.displayName = 'MosqueIcon';

export default MosqueIcon;
