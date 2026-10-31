import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ExternalLinkIcon = defineComponent({
  name: 'ExternalLinkIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M26.5 25 L26.5 32 Q26.5 38 20.5 38 L12 38 Q6 38 6 32 L6 20 Q6 14 12 14 L20.5 14', fill: 'none', stroke: '#2A2A2A', 'stroke-width': sw(5) }));
      children.push(h('path', { d: 'M19 25 L30.9 13.1', fill: 'none', stroke: '#E76F51', 'stroke-width': sw(4) }));
      children.push(h('path', { d: 'M33 18.8 L33 11 L25.2 11', fill: 'none', stroke: '#E76F51', 'stroke-width': sw(4) }));
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

export default ExternalLinkIcon;
