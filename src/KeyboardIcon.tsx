import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const KeyboardIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="5" y="15" width="38" height="19" rx="4" fill="#E9C46A"/>
<path d="M12 21 L14.5 21 M18.5 21 L21 21 M25 21 L27.5 21 M31.5 21 L34 21" strokeWidth={sw(3)}/>
<path d="M12 27 L14.5 27 M18.5 27 L21 27 M25 27 L27.5 27" strokeWidth={sw(3)}/>
<path d="M16 31.5 L32 31.5" stroke="#E76F51" strokeWidth={sw(3)}/>

    </svg>
  );
});

KeyboardIcon.displayName = 'KeyboardIcon';

export default KeyboardIcon;
