import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SnakeIcon = defineComponent({
  name: 'SnakeIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M12 36 C5 30 9 23 16 25 C23 27 27 21 24 15 C22 11 16 11 14 15', stroke: '#588157', 'stroke-width': sw(5), fill: 'none' }));
      children.push(h('circle', { cx: '12', cy: '36', r: '3', fill: '#588157' }));
      children.push(h('path', { d: 'M11 38 L6 39 M14 38 L18 39', stroke: '#E76F51', 'stroke-width': sw(2), fill: 'none' }));
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

export default SnakeIcon;
