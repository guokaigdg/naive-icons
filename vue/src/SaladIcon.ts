import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const SaladIcon = defineComponent({
  name: 'SaladIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M8 26 L40 26 C40 34 34 40 24 40 C14 40 8 34 8 26 Z', fill: '#2A9D8F' }));
      children.push(h('path', { d: 'M14 26 C10 18 20 12 24 18 C28 10 38 16 34 26 Z', fill: '#588157' }));
      children.push(h('circle', { cx: '20', cy: '23', r: '2.5', fill: '#E76F51', stroke: 'none' }));
      children.push(h('circle', { cx: '30', cy: '21', r: '2.5', fill: '#E9C46A', stroke: 'none' }));
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

export default SaladIcon;
