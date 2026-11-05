import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SelectAllIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M8 8 L16 8 M8 8 L8 16 M40 8 L32 8 M40 8 L40 16 M8 40 L16 40 M8 40 L8 32 M40 40 L32 40 M40 40 L40 32" stroke="#E76F51" strokeWidth={sw(2.5)} fill="none"/>
<rect x="16" y="16" width="16" height="16" rx="2" stroke="#264653" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

SelectAllIcon.displayName = 'SelectAllIcon';

export default SelectAllIcon;
