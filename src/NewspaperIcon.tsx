import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const NewspaperIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="8" y="10" width="32" height="28" rx="3" fill="#FAEDCD"/>
<rect x="8" y="10" width="32" height="8" fill="#E76F51"/>
<rect x="12" y="22" width="11" height="12" rx="1" fill="none" stroke="#2A2A2A" strokeWidth={sw(2.5)}/>
<path d="M27 23 L36 23" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>
<path d="M27 28 L36 28" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>
<path d="M27 33 L36 33" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>
<path d="M12 26 L23 26" stroke="#2A2A2A" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

NewspaperIcon.displayName = 'NewspaperIcon';

export default NewspaperIcon;
