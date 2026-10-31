import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ScooterIcon = defineComponent({
  name: 'ScooterIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(
        h('g', { transform: 'translate(48,0) scale(-1,1)' }, [
          h('path', { d: 'M6.55 31.85 L6.55 22.25 Q6.55 17.02 11.78 17.02 L20.51 17.02 Q22.25 24 26.62 29.24 L26.62 31.85 Z', fill: '#E9C46A' }),
          h('path', { d: 'M8.29 18.76 L8.29 13.53 Q8.29 10.91 10.91 10.91 L17.89 10.91 Q20.51 10.91 20.51 13.53 L20.51 18.76 Z', fill: '#264653' }),
          h('circle', { cx: '13.53', cy: '35.35', r: '5.24', fill: 'none', stroke: '#2A2A2A', 'stroke-width': sw(3) }),
          h('circle', { cx: '36.22', cy: '35.35', r: '5.24', fill: 'none', stroke: '#2A2A2A', 'stroke-width': sw(3) }),
          h('circle', { cx: '13.53', cy: '35.35', r: '1.92', fill: '#2A9D8F' }),
          h('circle', { cx: '36.22', cy: '35.35', r: '1.92', fill: '#2A9D8F' }),
          h('path', { d: 'M29.24 31.85 Q29.24 21.38 36.22 21.38 Q43.2 21.38 43.2 31.85 L41.45 31.85 Q41.45 28.97 36.22 28.97 Q30.98 28.97 30.98 31.85 Z', fill: '#E9C46A' }),
          h('path', { d: 'M24.87 28.36 L32.73 28.36 L32.73 31.85 L24.87 31.85 Z', fill: '#E76F51' }),
          h('path', { d: 'M29.24 31.85 L26.62 15.27 Q26.62 12.65 29.24 12.65 Q31.85 12.65 31.85 15.27 L34.47 31.85 Z', fill: '#E76F51' }),
          h('path', { d: 'M31.85 12.65 L31.85 10.04 Q31.85 8.29 33.6 8.29 L35.35 8.29 Q37.09 8.29 37.09 10.04 L37.09 12.65 Z', fill: '#E9C46A' }),
          h('path', { d: 'M24.87 11.78 L30.98 10.04', stroke: '#2A2A2A', 'stroke-width': sw(3) }),
        ]),
      );
      const labelled = Boolean(props.title || attrs['aria-label'] || attrs.role);
      return h(
        'svg',
        {
          viewBox: '0 0 48 48',
          xmlns: 'http://www.w3.org/2000/svg',
          fill: 'none',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          role: props.title ? 'img' : undefined,
          'aria-hidden': labelled ? undefined : true,
          ...normalizeIconProps({ ...props, ...attrs }),
        },
        children,
      );
    };
  },
});

export default ScooterIcon;
