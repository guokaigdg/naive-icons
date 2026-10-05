import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const ListIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const labelled = Boolean(props.title || props['aria-label'] || props.role);
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
      
<circle cx="10" cy="14" r="3.4" fill="#2A9D8F"/>
<circle cx="10" cy="24" r="3.4" fill="#E76F51"/>
<circle cx="10" cy="34" r="3.4" fill="#E9C46A"/>
<line x1="19" y1="14" x2="41" y2="14" stroke="#2A2A2A" stroke-width="4"/>
<line x1="19" y1="24" x2="41" y2="24" stroke="#2A2A2A" stroke-width="4"/>
<line x1="19" y1="34" x2="41" y2="34" stroke="#2A2A2A" stroke-width="4"/>

    </svg>
  );
});

ListIcon.displayName = 'ListIcon';

export default ListIcon;
