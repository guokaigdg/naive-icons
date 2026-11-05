import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const PickupTruckIcon = defineComponent({
  name: 'PickupTruckIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M6 34 L6 22 L16 22 L22 16 L30 16 L30 34 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M30 22 L42 22 L42 34 L30 34 Z', fill: '#E9C46A' }));
      children.push(h('circle', { cx: '13', cy: '36', r: '4', fill: '#264653' }));
      children.push(h('circle', { cx: '35', cy: '36', r: '4', fill: '#264653' }));
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

export default PickupTruckIcon;
