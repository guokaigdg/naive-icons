import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BadmintonIcon = defineComponent({
  name: 'BadmintonIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('ellipse', { cx: '20', cy: '20', rx: '8', ry: '10', fill: '#FFFFFF', transform: 'rotate(-30 20 20)' }));
      children.push(h('path', { d: 'M26 28 L38 40', stroke: '#E76F51', 'stroke-width': sw(4), fill: 'none' }));
      children.push(h('path', { d: 'M15 15 L25 25 M25 15 L15 25 M20 10 L20 30', stroke: '#264653', 'stroke-width': sw(1.5), fill: 'none' }));
      children.push(h('path', { d: 'M37 7 L41 12 L32 19 L28 14 Z', fill: '#FAEDCD' }));
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

export default BadmintonIcon;
