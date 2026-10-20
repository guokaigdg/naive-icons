import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ItalicIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M22 11 L33 11" stroke="#2A2A2A" strokeWidth={sw(4.5)} fill="none"/><path d="M31 11 L22 37" stroke="#E76F51" strokeWidth={sw(4.5)} fill="none"/><path d="M20 37 L31 37" stroke="#2A2A2A" strokeWidth={sw(4.5)} fill="none"/>

    </svg>
  );
});

ItalicIcon.displayName = 'ItalicIcon';

export default ItalicIcon;
