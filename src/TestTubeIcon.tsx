import { forwardRef } from 'react';
import type { IconProps } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const TestTubeIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

<g transform="rotate(-18 24 24)">
<path d="M18 7 V32.5 C 18 37 30 37 30 32.5 V7 Z" fill="#FAEDCD"/>
<path d="M19.8 20 V31.8 C 19.8 34.9 28.2 34.9 28.2 31.8 V20 Z" fill="#2A9D8F" stroke="none"/>
<rect x="16.5" y="5" width="15" height="4.5" rx="2" fill="#264653"/>
</g>

    </svg>
  );
});

TestTubeIcon.displayName = 'TestTubeIcon';

export default TestTubeIcon;
