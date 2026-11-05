import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PizzaIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M7 10 L41 10 L24 42 Z" fill="#E9C46A"/>
<path d="M7 10 L41 10 L39 17 L9 17 Z" fill="#8B5E3C"/>
<circle cx="16" cy="24" r="2.4" fill="#E76F51" stroke="none"/>
<circle cx="30" cy="25" r="2.2" fill="#E76F51" stroke="none"/>
<circle cx="23" cy="31" r="2" fill="#E76F51" stroke="none"/>

    </svg>
  );
});

PizzaIcon.displayName = 'PizzaIcon';

export default PizzaIcon;
