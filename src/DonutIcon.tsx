import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const DonutIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<circle cx="24" cy="24" r="15" fill="#F4A6A4"/>
<circle cx="24" cy="24" r="6" fill="#FFFFFF"/>
<rect x="16.4" y="12.7" width="5.2" height="2.6" rx="1.3" transform="rotate(25 19 14)" fill="#E9C46A" stroke="none"/>
<rect x="26.4" y="11.7" width="5.2" height="2.6" rx="1.3" transform="rotate(-20 29 13)" fill="#2A9D8F" stroke="none"/>
<rect x="31.4" y="18.7" width="5.2" height="2.6" rx="1.3" transform="rotate(45 34 20)" fill="#264653" stroke="none"/>
<rect x="12.4" y="21.7" width="5.2" height="2.6" rx="1.3" transform="rotate(-35 15 23)" fill="#E9C46A" stroke="none"/>
<rect x="29.4" y="29.7" width="5.2" height="2.6" rx="1.3" transform="rotate(15 32 31)" fill="#2A9D8F" stroke="none"/>
<rect x="16.4" y="30.7" width="5.2" height="2.6" rx="1.3" transform="rotate(60 19 32)" fill="#264653" stroke="none"/>

    </svg>
  );
});

DonutIcon.displayName = 'DonutIcon';

export default DonutIcon;
