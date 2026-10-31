import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CodeIcon = defineComponent({
  name: 'CodeIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M17 13 L 7 24 L 17 35', stroke: '#2A9D8F', 'stroke-width': sw(4), fill: 'none' }));
      children.push(h('path', { d: 'M31 13 L 41 24 L 31 35', stroke: '#2A9D8F', 'stroke-width': sw(4), fill: 'none' }));
      children.push(h('path', { d: 'M27 9 L 21 39', stroke: '#E76F51', 'stroke-width': sw(3.5) }));
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

export default CodeIcon;
