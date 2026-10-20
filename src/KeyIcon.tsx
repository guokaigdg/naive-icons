import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const KeyIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="14.4" cy="24" r="9.6" fill="#E9C46A"/>
<circle cx="14.4" cy="24" r="3.84" fill="#FAEDCD"/>
<path d="M24 24 L41.28 24" stroke="#2A2A2A" strokeWidth={sw(4)}/>
<path d="M29.76 24 L29.76 29.76" stroke="#2A2A2A" strokeWidth={sw(3)}/>
<path d="M35.52 24 L35.52 29.76" stroke="#2A2A2A" strokeWidth={sw(3)}/>

    </svg>
  );
});

KeyIcon.displayName = 'KeyIcon';

export default KeyIcon;
