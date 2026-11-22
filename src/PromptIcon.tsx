import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PromptIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="6" y="11" width="36" height="26" rx="5" fill="#FAEDCD"/>
<path d="M12 20 H31" strokeWidth={sw(3)} fill="none"/>
<path d="M12 28 H22" strokeWidth={sw(3)} fill="none"/>
<rect x="25" y="24.5" width="3.5" height="7" rx="1" fill="#E76F51" stroke="none"/>

    </svg>
  );
});

PromptIcon.displayName = 'PromptIcon';

export default PromptIcon;
