import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const PanelTopIcon = defineComponent({
  name: 'PanelTopIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '6', y: '9', width: '36', height: '30', rx: '4', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M6 18 L42 18 L42 13 C42 10.8 40.2 9 38 9 L10 9 C7.8 9 6 10.8 6 13 Z', fill: '#E76F51' }));
      children.push(h('rect', { x: '11', y: '24', width: '14', height: '5', rx: '2', fill: '#264653', stroke: 'none' }));
      children.push(h('rect', { x: '11', y: '32', width: '9', height: '5', rx: '2', fill: '#2A9D8F', stroke: 'none' }));
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

export default PanelTopIcon;
