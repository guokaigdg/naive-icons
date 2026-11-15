import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ChevronsUpIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M12 22 L24 11 L36 22" fill="none" stroke="#2A2A2A" strokeWidth={sw(3.5)}/>
<path d="M12 37 L24 26 L36 37" fill="none" stroke="#2A2A2A" strokeWidth={sw(3.5)}/>

    </svg>
  );
});

ChevronsUpIcon.displayName = 'ChevronsUpIcon';

export default ChevronsUpIcon;
