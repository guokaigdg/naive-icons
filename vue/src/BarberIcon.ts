import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BarberIcon = defineComponent({
  name: 'BarberIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '24', cy: '8', r: '2.5', fill: '#264653', stroke: 'none' }));
      children.push(h('rect', { x: '20', y: '10', width: '8', height: '28', rx: '4', fill: '#FFFFFF' }));
      children.push(h('path', { d: 'M20 16 L28 12 M20 24 L28 20 M20 32 L28 28', stroke: '#E76F51', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M15 40 H33', 'stroke-width': sw(3) }));
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

export default BarberIcon;
