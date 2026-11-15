import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const StockTickerIcon = defineComponent({
  name: 'StockTickerIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '5', y: '11', width: '38', height: '26', rx: '4', fill: '#264653' }));
      children.push(h('path', { d: 'M11 33 H37', stroke: '#FAEDCD', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('path', { d: 'M11 30.5 L17.5 24 L22.5 27.5 L29.5 20', stroke: '#E9C46A', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M25.5 20 H29.5 V24', stroke: '#E9C46A', 'stroke-width': sw(3), fill: 'none' }));
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

export default StockTickerIcon;
