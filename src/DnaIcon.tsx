import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const DnaIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M14 6 C30 14 18 24 34 34 C40 38 36 42 30 42" stroke="#2A9D8F" strokeWidth={sw(3.5)} fill="none"/>
<path d="M34 6 C18 14 30 24 14 34 C8 38 12 42 18 42" stroke="#E76F51" strokeWidth={sw(3.5)} fill="none"/>
<path d="M16 12 L32 12 M16 20 L32 20 M16 28 L32 28 M16 36 L32 36" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

DnaIcon.displayName = 'DnaIcon';

export default DnaIcon;
