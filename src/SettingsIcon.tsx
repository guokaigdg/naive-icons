import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps } from './iconProps';

export const SettingsIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

    
<path d="M24 6 L27 11 L33 10 L34 16 L40 18 L37 23 L40 28 L34 30 L33 36 L27 35 L24 40 L21 35 L15 36 L14 30 L8 28 L11 23 L8 18 L14 16 L15 10 L21 11 Z" fill="#264653"/>
<circle cx="24" cy="23" r="6" fill="#E9C46A"/>

  
    </svg>
  );
});

SettingsIcon.displayName = 'SettingsIcon';

export default SettingsIcon;
