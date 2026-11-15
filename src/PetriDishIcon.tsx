import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PetriDishIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="24" cy="24" r="16" fill="#FAEDCD"/>
<circle cx="24" cy="24" r="12" fill="#FFFFFF" strokeWidth={sw(2.4)}/>
<circle cx="19.5" cy="20" r="2.2" fill="#2A9D8F" stroke="none"/>
<circle cx="28" cy="19.5" r="1.8" fill="#588157" stroke="none"/>
<circle cx="21" cy="27.5" r="2.1" fill="#E76F51" stroke="none"/>
<circle cx="29" cy="27" r="1.6" fill="#2A9D8F" stroke="none"/>
<circle cx="24" cy="23.5" r="1.5" fill="#588157" stroke="none"/>

    </svg>
  );
});

PetriDishIcon.displayName = 'PetriDishIcon';

export default PetriDishIcon;
