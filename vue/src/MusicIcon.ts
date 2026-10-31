import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MusicIcon = defineComponent({
  name: 'MusicIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('ellipse', { cx: '16.03', cy: '31.97', rx: '7.97', ry: '5.98', transform: 'rotate(-15 16.03 31.97)', fill: '#E76F51' }));
      children.push(h('ellipse', { cx: '33.96', cy: '27.98', rx: '7.97', ry: '5.98', transform: 'rotate(-15 33.96 27.98)', fill: '#E76F51' }));
      children.push(h('path', { d: 'M22.01 14.04 L39.93 10.06 L39.93 27.98', stroke: '#2A2A2A', 'stroke-width': sw(3) }));
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

export default MusicIcon;
