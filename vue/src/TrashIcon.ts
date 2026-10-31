import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const TrashIcon = defineComponent({
  name: 'TrashIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M10 16 L38 16 L36 42 L12 42 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M18 16 L18 10 L30 10 L30 16', fill: '#F4A6A4' }));
      children.push(h('path', { d: 'M6 16 L42 16', stroke: '#2A2A2A', 'stroke-width': sw(3.5) }));
      children.push(h('path', { d: 'M19 22 L19 36', stroke: '#2A2A2A', 'stroke-width': sw(2.5) }));
      children.push(h('path', { d: 'M29 22 L29 36', stroke: '#2A2A2A', 'stroke-width': sw(2.5) }));
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

export default TrashIcon;
