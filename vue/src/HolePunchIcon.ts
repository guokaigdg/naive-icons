import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const HolePunchIcon = defineComponent({
  name: 'HolePunchIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '10', y: '19', width: '28', height: '16', rx: '3', fill: '#E76F51' }));
      children.push(h('path', { d: 'M10 19 L17 9 L31 9 L38 19 Z', fill: '#264653' }));
      children.push(h('circle', { cx: '19', cy: '27', r: '2.5', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '29', cy: '27', r: '2.5', fill: '#FAEDCD', stroke: 'none' }));
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

export default HolePunchIcon;
