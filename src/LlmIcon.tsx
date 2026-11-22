import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const LlmIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="11" cy="14" r="4" fill="#2A9D8F"/>
<circle cx="11" cy="34" r="4" fill="#2A9D8F"/>
<circle cx="24" cy="24" r="5" fill="#E9C46A"/>
<circle cx="37" cy="14" r="4" fill="#E76F51"/>
<circle cx="37" cy="34" r="4" fill="#E76F51"/>
<path d="M15 16 L20 22 M15 32 L20 26 M28 22 L33 16 M28 26 L33 32" strokeWidth={sw(2.4)} fill="none"/>

    </svg>
  );
});

LlmIcon.displayName = 'LlmIcon';

export default LlmIcon;
