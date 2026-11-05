import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BaseballIcon = defineComponent({
  name: 'BaseballIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '24', cy: '24', r: '17', fill: '#FFFFFF' }));
      children.push(h('path', { d: 'M14 12 C19 18 19 30 14 36', stroke: '#E76F51', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('path', { d: 'M34 12 C29 18 29 30 34 36', stroke: '#E76F51', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('path', { d: 'M14 18 L17 20 M14 24 L17 24 M14 30 L17 30', stroke: '#E76F51', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('path', { d: 'M34 18 L31 20 M34 24 L31 24 M34 30 L31 30', stroke: '#E76F51', 'stroke-width': sw(2), fill: 'none' }));
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

export default BaseballIcon;
