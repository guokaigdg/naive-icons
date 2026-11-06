import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const DragonflyIcon = defineComponent({
  name: 'DragonflyIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M24 15 C18 11 10 10 7 14 C10 19 18 21 24 23 C30 21 38 19 41 14 C38 10 30 11 24 15 Z', fill: '#2A9D8F' }));
      children.push(h('path', { d: 'M24 25 C18 23 10 24 8 28 C12 32 19 31 24 29 C29 31 36 32 40 28 C38 24 30 23 24 25 Z', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M24 12 L24 38', stroke: '#264653', 'stroke-width': sw(3.5), fill: 'none' }));
      children.push(h('circle', { cx: '24', cy: '11', r: '2.5', fill: '#264653' }));
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

export default DragonflyIcon;
