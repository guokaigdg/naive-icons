import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MarketIcon = defineComponent({
  name: 'MarketIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M8 16 L40 16 L38 24 C36 25 34 23 32 24 C30 25 28 23 26 24 C24 25 22 23 20 24 C18 25 16 23 14 24 C12 25 10 23 8 24 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M14 16 L13 23 M20 16 L19 24 M26 16 L25 24 M32 16 L31 24', stroke: '#FAEDCD', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('path', { d: 'M8 16 L40 16', stroke: '#2A2A2A', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M12 24 L12 34 M36 24 L36 34', stroke: '#8B5E3C', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M9 33 L39 33 L39 38 C39 40 37 41 35 42 L13 42 C11 42 9 40 9 38 Z', fill: '#8B5E3C' }));
      children.push(h('path', { d: 'M15 30 C15 27 23 27 23 30 L22 33 L16 33 Z', fill: '#E9C46A' }));
      children.push(h('circle', { cx: '17', cy: '29', r: '2', fill: '#588157', stroke: 'none' }));
      children.push(h('circle', { cx: '21', cy: '29', r: '2', fill: '#588157', stroke: 'none' }));
      children.push(h('path', { d: 'M26 28 L35 28 L35 33 L26 33 Z', fill: '#E9C46A' }));
      children.push(h('circle', { cx: '29', cy: '27', r: '2', fill: '#E76F51', stroke: 'none' }));
      children.push(h('circle', { cx: '32', cy: '27', r: '2', fill: '#E76F51', stroke: 'none' }));
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

export default MarketIcon;
