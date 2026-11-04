import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ArchiveIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="7" y="12" width="34" height="10" rx="3" fill="#E9C46A"/>
<path d="M9 22 L9 40 L39 40 L39 22" fill="#2A9D8F"/>
<rect x="19" y="28" width="10" height="6" rx="2" fill="#FAEDCD" stroke="none"/>

    </svg>
  );
});

ArchiveIcon.displayName = 'ArchiveIcon';

export default ArchiveIcon;
