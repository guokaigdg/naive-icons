import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SearchIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M29 29 L39.5 39.5" stroke="#264653" strokeWidth={sw(5.5)}/>
<circle cx="19" cy="19" r="13.5" fill="#2A9D8F"/>
<circle cx="19" cy="19" r="8.5" fill="#FAEDCD" stroke="none"/>
<circle cx="19" cy="19" r="4.5" fill="#2A9D8F" stroke="none"/>
<circle cx="15.5" cy="15.5" r="2.3" fill="#FFFFFF" stroke="none"/>

    </svg>
  );
});

SearchIcon.displayName = 'SearchIcon';

export default SearchIcon;
