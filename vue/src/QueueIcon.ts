import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const QueueIcon = defineComponent({
  name: 'QueueIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '7', y: '17', width: '10', height: '14', rx: '2', fill: '#E9C46A' }));
      children.push(h('rect', { x: '19', y: '17', width: '10', height: '14', rx: '2', fill: '#2A9D8F' }));
      children.push(h('rect', { x: '31', y: '17', width: '10', height: '14', rx: '2', fill: '#E76F51' }));
      children.push(h('path', { d: 'M10 22 H14 M10 26 H14 M22 22 H26 M22 26 H26 M34 22 H38 M34 26 H38', stroke: '#FFFFFF', 'stroke-width': sw(1.8), fill: 'none' }));
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

export default QueueIcon;
