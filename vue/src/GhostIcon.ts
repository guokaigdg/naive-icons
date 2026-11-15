import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const GhostIcon = defineComponent({
  name: 'GhostIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M12 40 V20 C 12 13 17 8 24 8 C 31 8 36 13 36 20 V40 L32 36 L28 40 L24 36 L20 40 L16 36 Z', fill: '#FFFFFF' }));
      children.push(h('circle', { cx: '19', cy: '21', r: '2', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('circle', { cx: '29', cy: '21', r: '2', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('ellipse', { cx: '24', cy: '29', rx: '2.6', ry: '3.2', fill: '#2A2A2A', stroke: 'none' }));
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

export default GhostIcon;
