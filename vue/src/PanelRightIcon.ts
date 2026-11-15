import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const PanelRightIcon = defineComponent({
  name: 'PanelRightIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '6', y: '9', width: '36', height: '30', rx: '4', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M30 9 L38 9 C40.2 9 42 10.8 42 13 L42 35 C42 37.2 40.2 39 38 39 L30 39 Z', fill: '#E76F51' }));
      children.push(h('rect', { x: '11', y: '17', width: '12', height: '5', rx: '2', fill: '#264653', stroke: 'none' }));
      children.push(h('rect', { x: '11', y: '27', width: '9', height: '5', rx: '2', fill: '#2A9D8F', stroke: 'none' }));
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

export default PanelRightIcon;
