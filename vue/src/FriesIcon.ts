import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FriesIcon = defineComponent({
  name: 'FriesIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M14 22 L34 22 L31 42 L17 42 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M17 22 L15 11 M23 22 L21 7 M29 22 L28 9 M33 22 L34 13', stroke: '#E9C46A', 'stroke-width': sw(4), fill: 'none' }));
      children.push(h('path', { d: 'M15 27 L33 27', stroke: '#FAEDCD', 'stroke-width': sw(2.5), fill: 'none' }));
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

export default FriesIcon;
