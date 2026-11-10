import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CornIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M 24 10 C 19.5 10 16.5 14 16.5 21 C 16.5 28 17.5 33 19.5 35.5 C 21.5 38 26.5 38 28.5 35.5 C 30.5 33 31.5 28 31.5 21 C 31.5 14 28.5 10 24 10 Z" fill="#E9C46A"/>
<circle cx="20.7" cy="16" r="1.5" fill="#FAEDCD" stroke="none"/>
<circle cx="24" cy="16" r="1.5" fill="#FAEDCD" stroke="none"/>
<circle cx="27.3" cy="16" r="1.5" fill="#FAEDCD" stroke="none"/>
<circle cx="20.2" cy="21.5" r="1.5" fill="#FAEDCD" stroke="none"/>
<circle cx="23.6" cy="21.5" r="1.5" fill="#FAEDCD" stroke="none"/>
<circle cx="27" cy="21.5" r="1.5" fill="#FAEDCD" stroke="none"/>
<circle cx="20.2" cy="27" r="1.5" fill="#FAEDCD" stroke="none"/>
<circle cx="23.6" cy="27" r="1.5" fill="#FAEDCD" stroke="none"/>
<circle cx="27" cy="27" r="1.5" fill="#FAEDCD" stroke="none"/>
<circle cx="20.7" cy="32" r="1.5" fill="#FAEDCD" stroke="none"/>
<circle cx="24" cy="32" r="1.5" fill="#FAEDCD" stroke="none"/>
<circle cx="27.3" cy="32" r="1.5" fill="#FAEDCD" stroke="none"/>
<path d="M 22.5 10.5 C 22 8 22.5 6.5 23.5 5.5" stroke="#8B5E3C" strokeWidth={sw(2)} fill="none"/>
<path d="M 24 9.8 C 24 7.2 24.3 6 25 5" stroke="#8B5E3C" strokeWidth={sw(2)} fill="none"/>
<path d="M 25.5 10.5 C 26 8 26.5 6.6 27.5 5.5" stroke="#8B5E3C" strokeWidth={sw(2)} fill="none"/>

    </svg>
  );
});

CornIcon.displayName = 'CornIcon';

export default CornIcon;
