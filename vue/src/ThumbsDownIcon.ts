import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const ThumbsDownIcon = defineComponent({
  name: 'ThumbsDownIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '7', y: '10', width: '7', height: '17', rx: '2', fill: '#2A9D8F' }));
      children.push(h('path', { d: 'M16 10 L16 25 L23 36 C 25 38.5 27.5 37 26.5 34 L 24.5 28 L 33 28 C 36.5 28 38 25.5 37 22.5 L 34 13 C 33.3 11 31.8 10 29.5 10 Z', fill: '#E9C46A' }));
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

export default ThumbsDownIcon;
