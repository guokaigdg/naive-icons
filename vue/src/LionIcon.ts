import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const LionIcon = defineComponent({
  name: 'LionIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M24 6 L29 11 L36 8 L37 15 L43 17 L38 23 L42 30 L35 32 L34 39 L27 37 L24 43 L21 37 L14 39 L13 32 L6 30 L10 23 L5 17 L11 15 L12 8 L19 11 Z', fill: '#E9C46A' }));
      children.push(h('circle', { cx: '24', cy: '24', r: '9.5', fill: '#E76F51' }));
      children.push(h('circle', { cx: '20', cy: '23', r: '1.3', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('circle', { cx: '28', cy: '23', r: '1.3', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('path', { d: 'M21 29 L27 29 L24 32 Z', fill: '#2A2A2A', stroke: 'none' }));
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

export default LionIcon;
