import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const BirdIcon = defineComponent({
  name: 'BirdIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('ellipse', { cx: '22', cy: '26', rx: '16', ry: '12', fill: '#2A9D8F' }));
      children.push(h('path', { d: 'M36 24 L42 20 L42 28 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M28 18 L36 14 L34 22 Z', fill: '#264653' }));
      children.push(h('circle', { cx: '34', cy: '22', r: '2', fill: '#FFFFFF' }));
      children.push(h('circle', { cx: '34', cy: '22', r: '1', fill: '#2A2A2A' }));
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

export default BirdIcon;
