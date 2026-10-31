import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const WaterCupIcon = defineComponent({
  name: 'WaterCupIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M13.3 12.33 L16.22 38.59 C 16.71 41.02 31.29 41.02 31.78 38.59 L34.7 12.33 Z', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M16.03 24 C 21.08 22.54 26.92 25.46 31.97 24 L 30.42 34.7 C 30.03 37.13 17.97 37.13 17.58 34.7 Z', fill: '#2A9D8F' }));
      children.push(h('path', { d: 'M27.89 11.36 L31.29 4.55', stroke: '#E76F51', 'stroke-width': sw(3) }));
      children.push(h('circle', { cx: '22.05', cy: '28.86', r: '1.56', fill: '#FAEDCD' }));
      children.push(h('circle', { cx: '25.46', cy: '32.27', r: '1.17', fill: '#FAEDCD' }));
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

export default WaterCupIcon;
