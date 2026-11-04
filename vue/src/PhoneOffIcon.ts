import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PhoneOffIcon = defineComponent({
  name: 'PhoneOffIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M10 8 L18 8 L22 18 L16 22 C 18 28 20 30 26 32 L30 26 L40 30 L40 38 C 40 40 38 42 36 42 C 22 42 6 26 6 12 C 6 10 8 8 10 8 Z', fill: '#588157' }));
      children.push(h('path', { d: 'M8 40 L40 8', stroke: '#E76F51', 'stroke-width': sw(4.5), fill: 'none' }));
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

export default PhoneOffIcon;
