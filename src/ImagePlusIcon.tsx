import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ImagePlusIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="6" y="10" width="30" height="27" rx="3" fill="#FAEDCD"/>
<circle cx="14" cy="18" r="2.4" fill="#E9C46A" stroke="none"/>
<path d="M9 33 L16 24 L22 30 L27 25 L33 32" stroke="#2A9D8F" strokeWidth={sw(2.5)} fill="none"/>
<circle cx="35" cy="35" r="8" fill="#FFFFFF"/>
<path d="M35 31 L35 39 M31 35 L39 35" stroke="#E76F51" strokeWidth={sw(3)}/>

    </svg>
  );
});

ImagePlusIcon.displayName = 'ImagePlusIcon';

export default ImagePlusIcon;
