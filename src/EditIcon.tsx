import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const EditIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

    
<path d="M8 38 L8 32 L30 10 L38 18 L16 40 L10 40 Z" fill="#E9C46A"/>
<path d="M30 10 L36 4 L42 10 L38 16" fill="#F4A6A4"/>
<path d="M8 38 L14 38" stroke="#2A2A2A" stroke-width="2"/>

  
    </svg>
  );
});

EditIcon.displayName = 'EditIcon';

export default EditIcon;
