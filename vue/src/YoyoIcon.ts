import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const YoyoIcon = defineComponent({
  name: 'YoyoIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M24 15.5 C 24 10 21 9 21 8', 'stroke-width': sw(2.8), fill: 'none' }));
      children.push(h('circle', { cx: '19', cy: '7.5', r: '2.8', 'stroke-width': sw(2.4) }));
      children.push(h('circle', { cx: '24', cy: '28.5', r: '13', fill: '#2A9D8F' }));
      children.push(h('circle', { cx: '24', cy: '28.5', r: '5', fill: '#E9C46A', 'stroke-width': sw(2.6) }));
      children.push(h('circle', { cx: '24', cy: '28.5', r: '1.6', fill: '#264653', stroke: 'none' }));
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

export default YoyoIcon;
