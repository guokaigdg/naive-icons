import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PlayingCardsIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="8" y="13" width="21" height="27" rx="4" fill="#264653"/>
<rect x="18" y="10" width="21" height="28" rx="4" fill="#FAEDCD"/>
<path d="M31 24 C31 24 30 23 28.5 23 C27 23 26.5 25 27.5 26.5 C28.5 28 31 30 31 30 L34.5 26.5 C36 25 35 23 33.5 23 C32 23 31 24 31 24 Z" fill="#E76F51" stroke="none"/>

    </svg>
  );
});

PlayingCardsIcon.displayName = 'PlayingCardsIcon';

export default PlayingCardsIcon;
