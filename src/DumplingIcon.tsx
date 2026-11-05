import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const DumplingIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M8 32 C8 24 14 18 24 18 C34 18 40 24 40 32 C40 37 33 40 24 40 C15 40 8 37 8 32 Z" fill="#FAEDCD"/>
<path d="M12 27 L17 22 L22 25 L27 21 L33 27" stroke="#E9C46A" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

DumplingIcon.displayName = 'DumplingIcon';

export default DumplingIcon;
