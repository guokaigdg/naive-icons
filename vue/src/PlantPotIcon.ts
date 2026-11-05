import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const PlantPotIcon = defineComponent({
  name: 'PlantPotIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M14 28 H34 L31 42 H17 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M24 28 V16' }));
      children.push(h('path', { d: 'M24 22 C18 22 14 18 14 12 C20 12 24 16 24 22 Z', fill: '#588157' }));
      children.push(h('path', { d: 'M24 24 C30 24 34 20 34 14 C28 14 24 18 24 24 Z', fill: '#2A9D8F' }));
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

export default PlantPotIcon;
