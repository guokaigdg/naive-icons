import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const GarbageTruckIcon = defineComponent({
  name: 'GarbageTruckIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '5', y: '13', width: '19', height: '18', rx: '2', fill: '#2A9D8F' }));
      children.push(h('path', { d: 'M8 17.5 H21', stroke: '#FAEDCD', 'stroke-width': sw(2.2), fill: 'none' }));
      children.push(h('rect', { x: '24', y: '18', width: '15', height: '13', rx: '2', fill: '#E76F51' }));
      children.push(h('rect', { x: '27', y: '21', width: '8', height: '5', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '13', cy: '36', r: '4.5', fill: '#264653' }));
      children.push(h('circle', { cx: '33', cy: '36', r: '4.5', fill: '#264653' }));
      children.push(h('circle', { cx: '13', cy: '36', r: '1.6', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '33', cy: '36', r: '1.6', fill: '#FAEDCD', stroke: 'none' }));
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

export default GarbageTruckIcon;
