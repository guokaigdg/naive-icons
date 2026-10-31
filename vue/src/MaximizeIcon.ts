import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MaximizeIcon = defineComponent({
  name: 'MaximizeIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M6 16 L6 6 L16 6', fill: 'none', stroke: '#2A2A2A', 'stroke-width': sw(4.5) }));
      children.push(h('path', { d: 'M32 6 L42 6 L42 16', fill: 'none', stroke: '#2A2A2A', 'stroke-width': sw(4.5) }));
      children.push(h('path', { d: 'M42 32 L42 42 L32 42', fill: 'none', stroke: '#2A2A2A', 'stroke-width': sw(4.5) }));
      children.push(h('path', { d: 'M16 42 L6 42 L6 32', fill: 'none', stroke: '#2A2A2A', 'stroke-width': sw(4.5) }));
      children.push(h('circle', { cx: '24', cy: '24', r: '3', fill: '#E76F51' }));
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

export default MaximizeIcon;
