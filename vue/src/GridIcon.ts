import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const GridIcon = defineComponent({
  name: 'GridIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '6', y: '6', width: '16', height: '16', rx: '3.5', fill: '#2A9D8F' }));
      children.push(h('rect', { x: '26', y: '6', width: '16', height: '16', rx: '3.5', fill: '#E9C46A' }));
      children.push(h('rect', { x: '6', y: '26', width: '16', height: '16', rx: '3.5', fill: '#E76F51' }));
      children.push(h('rect', { x: '26', y: '26', width: '16', height: '16', rx: '3.5', fill: '#264653' }));
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

export default GridIcon;
