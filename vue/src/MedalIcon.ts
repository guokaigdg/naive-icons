import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const MedalIcon = defineComponent({
  name: 'MedalIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M15 5 L22 17 L12 17 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M33 5 L26 17 L36 17 Z', fill: '#E76F51' }));
      children.push(h('circle', { cx: '24', cy: '30', r: '10', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M24 24 L26.4 29 L32 29.6 L27.8 33.4 L29 39 L24 36 L19 39 L20.2 33.4 L16 29.6 L21.6 29 Z', fill: '#E76F51', stroke: 'none' }));
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

export default MedalIcon;
