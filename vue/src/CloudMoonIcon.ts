import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const CloudMoonIcon = defineComponent({
  name: 'CloudMoonIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M34 5 C 39.5 6.5 42 9.5 42 13.5 C 42 18 39 21.5 34 22.5 C 36.8 20 38.2 17 38.2 13.5 C 38.2 10 36.8 7 34 5 Z', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M9.3 36 C 5.2 36 5.2 28.5 10.6 27.5 C 11.1 22.5 17.3 20 21 23.5 C 23.8 18.8 31.8 21.2 30.8 27 C 35.3 27.5 35.3 36 30.6 36 Z', fill: '#FAEDCD' }));
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

export default CloudMoonIcon;
