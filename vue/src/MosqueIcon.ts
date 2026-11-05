import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const MosqueIcon = defineComponent({
  name: 'MosqueIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M16 24 C16 14 32 14 32 24', fill: '#2A9D8F' }));
      children.push(h('rect', { x: '14', y: '24', width: '20', height: '16', fill: '#FAEDCD' }));
      children.push(h('rect', { x: '6', y: '14', width: '5', height: '26', fill: '#E76F51' }));
      children.push(h('rect', { x: '37', y: '14', width: '5', height: '26', fill: '#E76F51' }));
      children.push(h('circle', { cx: '8.5', cy: '12', r: '2.5', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('circle', { cx: '39.5', cy: '12', r: '2.5', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('path', { d: 'M20 40 V32 C20 28 28 28 28 32 V40', fill: '#264653', stroke: 'none' }));
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

export default MosqueIcon;
