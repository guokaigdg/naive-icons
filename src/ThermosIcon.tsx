import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ThermosIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="15.5" y="5" width="17" height="7.5" rx="2.5" fill="#E76F51"/>
<rect x="17.5" y="12" width="13" height="3.5" fill="#264653" strokeWidth={sw(2.4)}/>
<rect x="13.5" y="14.5" width="21" height="28" rx="5" fill="#2A9D8F"/>
<path d="M34.5 20 C 39.5 20 39.5 30 34.5 30" strokeWidth={sw(3)} fill="none"/>
<path d="M14.5 36.5 H33.5" stroke="#FAEDCD" strokeWidth={sw(2.4)} fill="none"/>

    </svg>
  );
});

ThermosIcon.displayName = 'ThermosIcon';

export default ThermosIcon;
