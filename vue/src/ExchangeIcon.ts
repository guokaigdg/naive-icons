import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ExchangeIcon = defineComponent({
  name: 'ExchangeIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '6', y: '8', width: '20', height: '12', rx: '2', fill: '#588157' }));
      children.push(h('circle', { cx: '16', cy: '14', r: '3.5', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('rect', { x: '22', y: '28', width: '20', height: '12', rx: '2', fill: '#E76F51' }));
      children.push(h('circle', { cx: '32', cy: '34', r: '3.5', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('path', { d: 'M19 22 L29 26', stroke: '#264653', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M19 22 L23 21 M19 22 L20 26', stroke: '#264653', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('path', { d: 'M29 26 L25 27 M29 26 L28 22', stroke: '#264653', 'stroke-width': sw(2.5), fill: 'none' }));
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

export default ExchangeIcon;
