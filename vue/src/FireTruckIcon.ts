import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FireTruckIcon = defineComponent({
  name: 'FireTruckIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M8 18 H30 V34 H8 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M30 22 H36 L41 27 V34 H30 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M10 12 H38', stroke: '#264653', 'stroke-width': sw(2.5) }));
      children.push(h('path', { d: 'M12 12 V18 M20 12 V18 M28 12 V18 M36 12 V18', stroke: '#264653', 'stroke-width': sw(2.5) }));
      children.push(h('circle', { cx: '14', cy: '36', r: '4.5', fill: '#264653' }));
      children.push(h('circle', { cx: '34', cy: '36', r: '4.5', fill: '#264653' }));
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

export default FireTruckIcon;
