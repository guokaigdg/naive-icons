import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MicIcon = defineComponent({
  name: 'MicIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '18', y: '5', width: '12', height: '20', rx: '6', fill: '#E76F51' }));
      children.push(h('path', { d: 'M12 21 C 12 31 16 33 24 33 C 32 33 36 31 36 21', stroke: '#2A2A2A', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M24 33 L 24 39', stroke: '#2A2A2A', 'stroke-width': sw(3) }));
      children.push(h('path', { d: 'M17 42 L 31 42', stroke: '#2A2A2A', 'stroke-width': sw(3.5) }));
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

export default MicIcon;
