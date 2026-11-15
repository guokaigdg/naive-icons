import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BookshelfIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="8" y="5" width="32" height="38" rx="2" fill="#8B5E3C"/>
<rect x="11.5" y="8.5" width="25" height="31" fill="#FAEDCD" stroke="none"/>
<path d="M11.5 21 H36.5 M11.5 32.5 H36.5" stroke="#8B5E3C" strokeWidth={sw(2.4)} fill="none"/>
<rect x="14" y="10" width="4.5" height="10" fill="#E76F51" strokeWidth={sw(2.2)}/>
<rect x="20" y="11.5" width="4.5" height="8.5" fill="#2A9D8F" strokeWidth={sw(2.2)}/>
<rect x="26" y="9.5" width="4.5" height="10.5" fill="#E9C46A" strokeWidth={sw(2.2)}/>
<rect x="14" y="23" width="4.5" height="8.5" fill="#2A9D8F" strokeWidth={sw(2.2)}/>
<rect x="20" y="24.5" width="4.5" height="7" fill="#F4A6A4" strokeWidth={sw(2.2)}/>
<rect x="28" y="23" width="4.5" height="8.5" fill="#E76F51" strokeWidth={sw(2.2)}/>
<rect x="15" y="34.5" width="4.5" height="4.5" fill="#E9C46A" strokeWidth={sw(2.2)}/>
<rect x="21" y="34.5" width="4.5" height="4.5" fill="#2A9D8F" strokeWidth={sw(2.2)}/>

    </svg>
  );
});

BookshelfIcon.displayName = 'BookshelfIcon';

export default BookshelfIcon;
