import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const TableTennisIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<ellipse cx="19" cy="20" rx="10" ry="11" fill="#E76F51"/>
<path d="M26 28 L38 40" stroke="#8B5E3C" strokeWidth={sw(4)} fill="none"/>
<circle cx="34" cy="11" r="3.5" fill="#FFFFFF"/>

    </svg>
  );
});

TableTennisIcon.displayName = 'TableTennisIcon';

export default TableTennisIcon;
