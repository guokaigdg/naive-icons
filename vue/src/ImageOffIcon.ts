import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ImageOffIcon = defineComponent({
  name: 'ImageOffIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '6', y: '10', width: '36', height: '28', rx: '3', fill: '#FAEDCD' }));
      children.push(h('circle', { cx: '15', cy: '19', r: '2.8', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M10 34 L18 24 L25 31 L32 22 L38 30', stroke: '#2A9D8F', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('path', { d: 'M10 38 L38 10', stroke: '#264653', 'stroke-width': sw(5) }));
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

export default ImageOffIcon;
