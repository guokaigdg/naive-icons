import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const RefreshIcon = defineComponent({
  name: 'RefreshIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M11 16.5 A 15 15 0 0 1 37 16.5', fill: 'none', stroke: '#2A9D8F', 'stroke-width': sw(4.5) }));
      children.push(h('path', { d: 'M40.7 23 L33 18.8 L41 14.2 Z', fill: '#E76F51', 'stroke-width': sw(3) }));
      children.push(h('path', { d: 'M37 31.5 A 15 15 0 0 1 11 31.5', fill: 'none', stroke: '#2A9D8F', 'stroke-width': sw(4.5) }));
      children.push(h('path', { d: 'M7.3 25 L15 29.2 L7 33.8 Z', fill: '#E76F51', 'stroke-width': sw(3) }));
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

export default RefreshIcon;
