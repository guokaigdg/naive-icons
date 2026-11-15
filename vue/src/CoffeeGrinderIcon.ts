import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CoffeeGrinderIcon = defineComponent({
  name: 'CoffeeGrinderIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '15', y: '5', width: '18', height: '5', rx: '2.5', fill: '#264653' }));
      children.push(h('path', { d: 'M15 10 H33 L36 21 H12 Z', fill: '#FAEDCD' }));
      children.push(h('circle', { cx: '18.5', cy: '15', r: '1.7', fill: '#8B5E3C', stroke: 'none' }));
      children.push(h('circle', { cx: '24', cy: '13.5', r: '1.7', fill: '#8B5E3C', stroke: 'none' }));
      children.push(h('circle', { cx: '29.5', cy: '15', r: '1.7', fill: '#8B5E3C', stroke: 'none' }));
      children.push(h('circle', { cx: '21.5', cy: '18', r: '1.7', fill: '#8B5E3C', stroke: 'none' }));
      children.push(h('circle', { cx: '26.5', cy: '18', r: '1.7', fill: '#8B5E3C', stroke: 'none' }));
      children.push(h('rect', { x: '11', y: '21', width: '26', height: '18', rx: '3', fill: '#264653' }));
      children.push(h('rect', { x: '15', y: '31', width: '12', height: '5', rx: '1.5', fill: '#FAEDCD', 'stroke-width': sw(2.2) }));
      children.push(h('circle', { cx: '32', cy: '26', r: '2', fill: '#E9C46A', stroke: 'none' }));
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

export default CoffeeGrinderIcon;
