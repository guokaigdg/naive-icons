import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const DrumIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M9 13 V30 C 9 36 39 36 39 30 V13" fill="#E76F51"/>
<ellipse cx="24" cy="13" rx="15" ry="5.5" fill="#FAEDCD"/>
<path d="M12 19.5 L17 22.5 L12 25.5" stroke="#FAEDCD" strokeWidth={sw(2.2)} fill="none"/>
<path d="M36 19.5 L31 22.5 L36 25.5" stroke="#FAEDCD" strokeWidth={sw(2.2)} fill="none"/>
<path d="M10 31 C 14 34.5 34 34.5 38 31" stroke="#E9C46A" strokeWidth={sw(2.2)} fill="none"/>

    </svg>
  );
});

DrumIcon.displayName = 'DrumIcon';

export default DrumIcon;
