import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const MoonStarIcon = defineComponent({
  name: 'MoonStarIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M24 9 C 15.5 10.6 10.5 17 11.8 24.5 C 13 31 18.5 35.5 24.5 36 C 18.5 32 15.5 26 17.5 20.5 C 19 16 21.5 12 24 9 Z', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M34 7 L35.76 11.57 L40.66 11.84 L36.85 14.93 L38.11 19.66 L34 17 L29.89 19.66 L31.15 14.93 L27.34 11.84 L32.24 11.57 Z', fill: '#E9C46A' }));
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

export default MoonStarIcon;
