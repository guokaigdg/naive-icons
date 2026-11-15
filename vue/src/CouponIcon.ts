import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CouponIcon = defineComponent({
  name: 'CouponIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M7 14 H41 V21.5 C 38 21.5 38 26.5 41 26.5 V34 H7 V26.5 C 10 26.5 10 21.5 7 21.5 Z', fill: '#F4A6A4' }));
      children.push(h('circle', { cx: '18', cy: '20', r: '2.2', fill: '#E76F51', stroke: 'none' }));
      children.push(h('circle', { cx: '30', cy: '28', r: '2.2', fill: '#E76F51', stroke: 'none' }));
      children.push(h('path', { d: 'M17.5 30 L30.5 18', stroke: '#E76F51', 'stroke-width': sw(2.4), fill: 'none' }));
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

export default CouponIcon;
