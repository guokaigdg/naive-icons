import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ChevronsLeftRightIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M19 12 L8 24 L19 36" fill="none" stroke="#2A2A2A" strokeWidth={sw(3.5)}/>
<path d="M29 12 L40 24 L29 36" fill="none" stroke="#2A2A2A" strokeWidth={sw(3.5)}/>

    </svg>
  );
});

ChevronsLeftRightIcon.displayName = 'ChevronsLeftRightIcon';

export default ChevronsLeftRightIcon;
