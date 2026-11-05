import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const StickyNoteIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M7 7 L41 7 L41 34 L34 41 L7 41 Z" fill="#E9C46A"/>
<path d="M41 34 L34 34 L34 41 Z" fill="#FAEDCD" stroke="none"/>
<path d="M13 15 L33 15 M13 23 L29 23 M13 31 L24 31" stroke="#8B5E3C" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

StickyNoteIcon.displayName = 'StickyNoteIcon';

export default StickyNoteIcon;
