import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const GasStationIcon = defineComponent({
  name: 'GasStationIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M6 40 L42 40', stroke: '#264653', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('rect', { x: '7', y: '14', width: '20', height: '26', rx: '3', fill: '#E76F51' }));
      children.push(h('path', { d: 'M11 20 L23 20', stroke: '#FAEDCD', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('path', { d: 'M27 20 C34 20 36 24 34 28 L30 34', stroke: '#264653', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('rect', { x: '28', y: '34', width: '9', height: '6', rx: '2', fill: '#264653' }));
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

export default GasStationIcon;
