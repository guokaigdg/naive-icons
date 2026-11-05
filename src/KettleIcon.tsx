import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const KettleIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M14 20 C14 14 34 14 34 20 L36 36 C36 40 32 42 24 42 C16 42 12 40 12 36 Z" fill="#2A9D8F"/>
<path d="M16 16 C16 8 32 8 32 16" stroke="#2A2A2A" fill="none"/>
<path d="M35 24 L41 19 L41 23" stroke="#2A2A2A" strokeWidth={sw(3.5)} fill="none"/>

    </svg>
  );
});

KettleIcon.displayName = 'KettleIcon';

export default KettleIcon;
