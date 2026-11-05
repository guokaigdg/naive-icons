import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const Volume2Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<path d="M8 18 L16 18 L26 10 L26 38 L16 30 L8 30 Z" fill="#264653"/>
<path d="M31 16 C36 20 36 28 31 32" fill="none" stroke="#E9C46A" strokeWidth={sw(4)}/>
<path d="M37 10 C42 15 42 33 37 38" fill="none" stroke="#E9C46A" strokeWidth={sw(3.5)}/>

    </svg>
  );
});

Volume2Icon.displayName = 'Volume2Icon';

export default Volume2Icon;
