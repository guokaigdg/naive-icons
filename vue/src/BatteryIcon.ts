import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const BatteryIcon = defineComponent({
  name: 'BatteryIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '7', y: '15', width: '28', height: '18', rx: '4', fill: '#2A9D8F' }));
      children.push(h('rect', { x: '36', y: '21', width: '6', height: '6', rx: '2', fill: '#2A9D8F' }));
      children.push(h('rect', { x: '12', y: '20', width: '11', height: '8', rx: '2', fill: '#E9C46A', stroke: 'none' }));
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

export default BatteryIcon;
