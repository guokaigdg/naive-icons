import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const IcecreamIcon = defineComponent({
  name: 'IcecreamIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M15.36 23.04 L 24 42.24 L 32.64 23.04 Z', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M18.24 27.84 L 29.76 27.84 M20.16 32.64 L 27.84 32.64', stroke: '#2A2A2A', 'stroke-width': sw(1.5) }));
      children.push(h('circle', { cx: '24', cy: '16.32', r: '8.64', fill: '#F4A6A4' }));
      children.push(h('circle', { cx: '24', cy: '7.2', r: '2.4', fill: '#E76F51' }));
      children.push(h('circle', { cx: '21.12', cy: '15.36', r: '1.34', fill: '#2A2A2A' }));
      children.push(h('circle', { cx: '26.88', cy: '15.36', r: '1.34', fill: '#2A2A2A' }));
      children.push(h('path', { d: 'M21.6 18.72 Q 24 20.64 26.4 18.72', stroke: '#2A2A2A', fill: 'none', 'stroke-width': sw(1.5) }));
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

export default IcecreamIcon;
