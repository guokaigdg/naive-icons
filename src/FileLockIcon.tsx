import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FileLockIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M12 7 L28 7 L38 17 L38 41 L12 41 Z" fill="#FAEDCD"/>
<path d="M28 7 L28 17 L38 17" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>
<rect x="20.5" y="30" width="9" height="7" rx="1.5" fill="#E9C46A"/>
<path d="M22.5 30 L22.5 27.2 C22.5 24 27.5 24 27.5 27.2 L27.5 30" stroke="#264653" strokeWidth={sw(2.2)} fill="none"/>

    </svg>
  );
});

FileLockIcon.displayName = 'FileLockIcon';

export default FileLockIcon;
