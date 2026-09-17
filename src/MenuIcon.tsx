import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const MenuIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const labelled = Boolean(props.title || props['aria-label'] || props.role);
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
      
<line x1="10" y1="15" x2="38" y2="15" stroke="#2A2A2A" stroke-width="3.5"/>
<line x1="10" y1="24" x2="38" y2="24" stroke="#2A2A2A" stroke-width="3.5"/>
<line x1="14" y1="33" x2="34" y2="33" stroke="#2A2A2A" stroke-width="3.5"/>

    </svg>
  );
});

MenuIcon.displayName = 'MenuIcon';

export default MenuIcon;
