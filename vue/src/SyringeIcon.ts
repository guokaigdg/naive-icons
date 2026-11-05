import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SyringeIcon = defineComponent({
  name: 'SyringeIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '17', y: '12', width: '14', height: '18', rx: '2', fill: '#FAEDCD' }));
      children.push(h('rect', { x: '20', y: '6', width: '8', height: '6', fill: '#2A9D8F' }));
      children.push(h('rect', { x: '19', y: '20', width: '10', height: '8', fill: '#E76F51', stroke: 'none' }));
      children.push(h('path', { d: 'M24 30 L24 42', stroke: '#2A2A2A', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M19 34 L29 34', stroke: '#2A2A2A', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('path', { d: 'M20 27 L28 27', stroke: '#FAEDCD', 'stroke-width': sw(1.5), fill: 'none' }));
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

export default SyringeIcon;
