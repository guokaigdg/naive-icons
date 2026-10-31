import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const TentIcon = defineComponent({
  name: 'TentIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M5 37 L24 11 L43 37 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M24 21 L32.5 37 L15.5 37 Z', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M24 11 L24 6', stroke: '#2A2A2A', 'stroke-width': sw(2) }));
      children.push(h('path', { d: 'M24 6 L31 8.5 L24 11 Z', fill: '#E9C46A' }));
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

export default TentIcon;
