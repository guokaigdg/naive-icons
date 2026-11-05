import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MagazineIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<rect x="8" y="6" width="32" height="36" rx="2" fill="#FFFFFF"/>
<rect x="8" y="6" width="32" height="9" rx="2" fill="#E76F51" stroke="none"/>
<rect x="13" y="20" width="22" height="13" fill="#FAEDCD" stroke="none"/>
<path d="M15 38 L33 38" stroke="#264653" strokeWidth={sw(2.5)} fill="none"/>

    </svg>
  );
});

MagazineIcon.displayName = 'MagazineIcon';

export default MagazineIcon;
