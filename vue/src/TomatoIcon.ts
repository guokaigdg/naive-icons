import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const TomatoIcon = defineComponent({
  name: 'TomatoIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '24', cy: '27', r: '14', fill: '#E76F51' }));
      children.push(h('path', { d: 'M24 14 C 20 8 16 8 15 12 C 18 15 21 16 24 15 C 27 16 30 15 33 12 C 32 8 28 8 24 14 Z', fill: '#588157' }));
      children.push(h('path', { d: 'M24 14 L24 9', stroke: '#588157', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('circle', { cx: '18', cy: '22', r: '2', fill: '#FFFFFF', stroke: 'none' }));
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

export default TomatoIcon;
