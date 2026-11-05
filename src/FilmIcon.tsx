import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FilmIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="6" y="12" width="36" height="24" rx="3" fill="#264653"/>
<rect x="10" y="15" width="5" height="4" rx="1" fill="#FAEDCD" stroke="none"/>
<rect x="18" y="15" width="5" height="4" rx="1" fill="#FAEDCD" stroke="none"/>
<rect x="26" y="15" width="5" height="4" rx="1" fill="#FAEDCD" stroke="none"/>
<rect x="34" y="15" width="5" height="4" rx="1" fill="#FAEDCD" stroke="none"/>
<rect x="10" y="29" width="5" height="4" rx="1" fill="#FAEDCD" stroke="none"/>
<rect x="18" y="29" width="5" height="4" rx="1" fill="#FAEDCD" stroke="none"/>
<rect x="26" y="29" width="5" height="4" rx="1" fill="#FAEDCD" stroke="none"/>
<rect x="34" y="29" width="5" height="4" rx="1" fill="#FAEDCD" stroke="none"/>
<rect x="17" y="21" width="14" height="6" rx="1" fill="#E76F51" stroke="none"/>

    </svg>
  );
});

FilmIcon.displayName = 'FilmIcon';

export default FilmIcon;
