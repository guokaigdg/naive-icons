import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MedicalGloveIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M15 40 L15 20 C15 17 19 17 19 20 L19 24 L19 16 C19 13 23 13 23 16 L23 24 L23 14 C23 11 27 11 27 14 L27 24 L27 17 C27 14 31 14 31 17 L31 32 C31 38 26 41 21 41 Z" fill="#2A9D8F"/>
<path d="M15 36 L31 36" stroke="#FAEDCD" strokeWidth={sw(2)} fill="none"/>

    </svg>
  );
});

MedicalGloveIcon.displayName = 'MedicalGloveIcon';

export default MedicalGloveIcon;
