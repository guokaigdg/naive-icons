import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const AirplaneIcon = defineComponent({
  name: 'AirplaneIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M22 8 L26 8 L28 20 L42 22 L42 26 L28 28 L26.7 33 L33 40 L15 40 L20.8 33 L20 28 L6 26 L6 22 L20 20 Z', fill: '#264653' }));
      children.push(h('path', { d: 'M22 20 L26 20 L26 28 L22 28 Z', fill: '#E76F51' }));
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

export default AirplaneIcon;
