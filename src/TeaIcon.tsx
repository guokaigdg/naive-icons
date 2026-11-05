import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const TeaIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M12 18 L36 18 L34 36 C34 40 30 42 24 42 C18 42 14 40 14 36 Z" fill="#FAEDCD"/>
<path d="M36 22 C42 22 42 32 36 32" stroke="#2A2A2A" fill="none"/>
<path d="M20 14 C18 11 22 9 20 6 M28 14 C26 11 30 9 28 6" stroke="#2A9D8F" strokeWidth={sw(3)} fill="none"/>

    </svg>
  );
});

TeaIcon.displayName = 'TeaIcon';

export default TeaIcon;
