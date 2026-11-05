import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ListPlusIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M22 14 H39"/>
<path d="M22 26 H39"/>
<path d="M22 38 H39"/>
<path d="M11 7 V15"/>
<path d="M7 11 H15"/>
<circle cx="11" cy="26" r="2" fill="#264653" stroke="none"/>
<circle cx="11" cy="38" r="2" fill="#264653" stroke="none"/>

    </svg>
  );
});

ListPlusIcon.displayName = 'ListPlusIcon';

export default ListPlusIcon;
