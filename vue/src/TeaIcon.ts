import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const TeaIcon = defineComponent({
  name: 'TeaIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M12 18 L36 18 L34 36 C34 40 30 42 24 42 C18 42 14 40 14 36 Z', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M36 22 C42 22 42 32 36 32', stroke: '#2A2A2A', fill: 'none' }));
      children.push(h('path', { d: 'M20 14 C18 11 22 9 20 6 M28 14 C26 11 30 9 28 6', stroke: '#2A9D8F', 'stroke-width': sw(3), fill: 'none' }));
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

export default TeaIcon;
