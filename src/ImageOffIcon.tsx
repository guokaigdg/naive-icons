import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ImageOffIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="6" y="10" width="36" height="28" rx="3" fill="#FAEDCD"/>
<circle cx="15" cy="19" r="2.8" fill="#E9C46A"/>
<path d="M10 34 L18 24 L25 31 L32 22 L38 30" stroke="#2A9D8F" strokeWidth={sw(2.5)} fill="none"/>
<path d="M10 38 L38 10" stroke="#264653" strokeWidth={sw(5)}/>

    </svg>
  );
});

ImageOffIcon.displayName = 'ImageOffIcon';

export default ImageOffIcon;
