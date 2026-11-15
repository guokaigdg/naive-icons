import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CoffeeGrinderIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="15" y="5" width="18" height="5" rx="2.5" fill="#264653"/>
<path d="M15 10 H33 L36 21 H12 Z" fill="#FAEDCD"/>
<circle cx="18.5" cy="15" r="1.7" fill="#8B5E3C" stroke="none"/>
<circle cx="24" cy="13.5" r="1.7" fill="#8B5E3C" stroke="none"/>
<circle cx="29.5" cy="15" r="1.7" fill="#8B5E3C" stroke="none"/>
<circle cx="21.5" cy="18" r="1.7" fill="#8B5E3C" stroke="none"/>
<circle cx="26.5" cy="18" r="1.7" fill="#8B5E3C" stroke="none"/>
<rect x="11" y="21" width="26" height="18" rx="3" fill="#264653"/>
<rect x="15" y="31" width="12" height="5" rx="1.5" fill="#FAEDCD" strokeWidth={sw(2.2)}/>
<circle cx="32" cy="26" r="2" fill="#E9C46A" stroke="none"/>

    </svg>
  );
});

CoffeeGrinderIcon.displayName = 'CoffeeGrinderIcon';

export default CoffeeGrinderIcon;
