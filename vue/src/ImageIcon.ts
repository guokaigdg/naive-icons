import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const ImageIcon = defineComponent({
  name: 'ImageIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '6', y: '10', width: '36', height: '28', rx: '3', fill: '#FAEDCD' }));
      children.push(h('circle', { cx: '16', cy: '20', r: '3', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M10 36 L20 24 L28 32 L36 22 L42 36 Z', fill: '#2A9D8F' }));
      children.push(h('path', { d: 'M10 36 L42 36', stroke: '#2A2A2A' }));
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

export default ImageIcon;
