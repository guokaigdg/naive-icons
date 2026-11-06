import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const LocationOffIcon = defineComponent({
  name: 'LocationOffIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M24 40 C24 40 36 30 36 20 C36 13 30 8 24 8 C18 8 12 13 12 20 C12 30 24 40 24 40 Z', fill: '#2A9D8F' }));
      children.push(h('circle', { cx: '24', cy: '20', r: '4.5', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('path', { d: 'M11 9 L37 37', stroke: '#E76F51', 'stroke-width': sw(3.5), fill: 'none' }));
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

export default LocationOffIcon;
