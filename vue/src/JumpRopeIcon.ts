import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const JumpRopeIcon = defineComponent({
  name: 'JumpRopeIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M10 16 C13 34 35 34 38 16', stroke: '#2A2A2A', 'stroke-width': sw(3.5), fill: 'none' }));
      children.push(h('rect', { x: '7', y: '5', width: '6', height: '11', rx: '3', fill: '#E76F51' }));
      children.push(h('rect', { x: '35', y: '5', width: '6', height: '11', rx: '3', fill: '#E76F51' }));
      children.push(h('path', { d: 'M8 9 L12 9 M8 13 L12 13', stroke: '#FAEDCD', 'stroke-width': sw(1.5), fill: 'none' }));
      children.push(h('path', { d: 'M36 9 L40 9 M36 13 L40 13', stroke: '#FAEDCD', 'stroke-width': sw(1.5), fill: 'none' }));
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

export default JumpRopeIcon;
