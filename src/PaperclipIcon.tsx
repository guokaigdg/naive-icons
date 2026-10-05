import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const PaperclipIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      
<path d="M17 31 L28 20 A 5 5 0 0 0 21 13 L 12 22 A 9 9 0 0 0 25 35 L 33 27" fill="none" stroke="#2A9D8F" stroke-width="4.5"/>

    </svg>
  );
});

PaperclipIcon.displayName = 'PaperclipIcon';

export default PaperclipIcon;
