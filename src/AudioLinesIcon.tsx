import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const AudioLinesIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M10 18 L10 30 M17 12 L17 36 M24 16 L24 32 M31 9 L31 39 M38 15 L38 33" stroke="#2A9D8F" strokeWidth={sw(3.5)} fill="none"/>

    </svg>
  );
});

AudioLinesIcon.displayName = 'AudioLinesIcon';

export default AudioLinesIcon;
