import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const EditIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M8.64 37.44 L8.64 31.68 L29.76 10.56 L37.44 18.24 L16.32 39.36 L10.56 39.36 Z" fill="#E9C46A"/>
<path d="M29.76 10.56 L35.52 4.8 L41.28 10.56 L37.44 16.32" fill="#F4A6A4"/>
<path d="M8.64 37.44 L14.4 37.44" stroke="#2A2A2A" strokeWidth={sw(2)}/>

    </svg>
  );
});

EditIcon.displayName = 'EditIcon';

export default EditIcon;
