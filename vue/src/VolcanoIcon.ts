import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const VolcanoIcon = defineComponent({
  name: 'VolcanoIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M5 41 L14 19 L20 25 L27 11 L43 41 Z', fill: '#8B5E3C' }));
      children.push(h('path', { d: 'M27 11 L32 17 L23 17 Z', fill: '#E76F51', stroke: 'none' }));
      children.push(h('circle', { cx: '24', cy: '7', r: '2', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '29', cy: '5', r: '1.6', fill: '#FAEDCD', stroke: 'none' }));
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

export default VolcanoIcon;
