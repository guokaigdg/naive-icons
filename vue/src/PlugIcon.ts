import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PlugIcon = defineComponent({
  name: 'PlugIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M14 18 L34 18 L34 30 C 34 36 29 40 24 40 C 19 40 14 36 14 30 Z', fill: '#264653' }));
      children.push(h('rect', { x: '17', y: '8', width: '4', height: '10', rx: '2', fill: '#E76F51' }));
      children.push(h('rect', { x: '27', y: '8', width: '4', height: '10', rx: '2', fill: '#E76F51' }));
      children.push(h('path', { d: 'M24 40 L24 42', stroke: '#2A2A2A', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M19 25 L29 25', stroke: '#FAEDCD', 'stroke-width': sw(2.5), fill: 'none' }));
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

export default PlugIcon;
