import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const UnderlineIcon = defineComponent({
  name: 'UnderlineIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M17 10 L17 27 C 17 35 31 35 31 27 L31 10', stroke: '#2A9D8F', 'stroke-width': sw(4), fill: 'none' }));
      children.push(h('path', { d: 'M8 40 L40 40', stroke: '#2A2A2A', 'stroke-width': sw(4.5), fill: 'none' }));
      children.push(h('circle', { cx: '24', cy: '19', r: '2.5', fill: '#E9C46A', stroke: 'none' }));
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

export default UnderlineIcon;
