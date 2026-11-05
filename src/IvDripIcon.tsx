import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const IvDripIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M14 8 L30 8 L30 26 L14 26 Z" fill="#FAEDCD"/>
<path d="M14 14 L30 14" stroke="#2A9D8F" strokeWidth={sw(2.5)} fill="none"/>
<path d="M18 26 L18 34 C18 38 24 38 24 34 L24 26" stroke="#2A9D8F" strokeWidth={sw(2)} fill="none"/>
<path d="M33 8 L33 40 M29 40 L37 40" stroke="#264653" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

IvDripIcon.displayName = 'IvDripIcon';

export default IvDripIcon;
