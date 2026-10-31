import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const LampIcon = defineComponent({
  name: 'LampIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M17 7 L 31 7 L 37 24 L 11 24 Z', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M24 24 L 24 36', stroke: '#2A2A2A', 'stroke-width': sw(3) }));
      children.push(h('rect', { x: '15', y: '36', width: '18', height: '4.5', rx: '2', fill: '#264653' }));
      children.push(h('path', { d: 'M12 29 L 10 32', stroke: '#2A2A2A', 'stroke-width': sw(2) }));
      children.push(h('path', { d: 'M24 29 L 24 33', stroke: '#2A2A2A', 'stroke-width': sw(2) }));
      children.push(h('path', { d: 'M36 29 L 38 32', stroke: '#2A2A2A', 'stroke-width': sw(2) }));
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

export default LampIcon;
