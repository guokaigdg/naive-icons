import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CandlestickChartIcon = defineComponent({
  name: 'CandlestickChartIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M7 40 L41 40 M7 9 L7 40', stroke: '#264653', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('path', { d: 'M16.5 17 L16.5 36', stroke: '#2A2A2A', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('rect', { x: '13', y: '21', width: '7', height: '12', fill: '#588157' }));
      children.push(h('path', { d: 'M26.5 10 L26.5 34', stroke: '#2A2A2A', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('rect', { x: '23', y: '14', width: '7', height: '17', fill: '#E76F51' }));
      children.push(h('path', { d: 'M36.5 19 L36.5 37', stroke: '#2A2A2A', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('rect', { x: '33', y: '23', width: '7', height: '11', fill: '#588157' }));
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

export default CandlestickChartIcon;
