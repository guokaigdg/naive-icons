import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const HighlighterIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="6" y="17" width="27" height="12" rx="3" fill="#E9C46A"/>
<path d="M33 17 L41 20 L41 26 L33 29 Z" fill="#FAEDCD"/>
<path d="M12 17 L12 29" stroke="#264653" strokeWidth={sw(2.5)} fill="none"/>
<path d="M8 37 L40 37" stroke="#F4A6A4" strokeWidth={sw(4)} fill="none"/>

    </svg>
  );
});

HighlighterIcon.displayName = 'HighlighterIcon';

export default HighlighterIcon;
