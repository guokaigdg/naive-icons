import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PopcornIcon = defineComponent({
  name: 'PopcornIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M10 24 L38 24 L34 42 L14 42 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M17 24 L15 42 M24 24 L24 42 M31 24 L33 42', stroke: '#FAEDCD', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('circle', { cx: '14', cy: '17', r: '4', fill: '#FAEDCD' }));
      children.push(h('circle', { cx: '21', cy: '12', r: '4.5', fill: '#E9C46A' }));
      children.push(h('circle', { cx: '28', cy: '15', r: '4', fill: '#FAEDCD' }));
      children.push(h('circle', { cx: '34', cy: '18', r: '3.5', fill: '#E9C46A' }));
      children.push(h('circle', { cx: '24', cy: '20', r: '3.5', fill: '#FAEDCD' }));
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

export default PopcornIcon;
