import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ToasterIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="6" y="20" width="36" height="19" rx="5" fill="#E76F51"/>
<path d="M14 20 L14 10 C14 7 20 7 20 10 L20 20 Z" fill="#E9C46A"/>
<path d="M27 20 L27 8 C27 5 33 5 33 8 L33 20 Z" fill="#E9C46A"/>
<path d="M12 34 L36 34" stroke="#FAEDCD" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

ToasterIcon.displayName = 'ToasterIcon';

export default ToasterIcon;
