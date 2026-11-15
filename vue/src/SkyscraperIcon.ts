import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SkyscraperIcon = defineComponent({
  name: 'SkyscraperIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '18', y: '7.5', width: '12', height: '6', rx: '1.5', fill: '#E76F51' }));
      children.push(h('path', { d: 'M24 7.5 L24 4.8', stroke: '#2A2A2A', 'stroke-width': sw(2.6), fill: 'none' }));
      children.push(h('rect', { x: '14', y: '12', width: '20', height: '29', rx: '2', fill: '#264653' }));
      children.push(h('rect', { x: '16.5', y: '15.5', width: '3.8', height: '3.8', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('rect', { x: '22.1', y: '15.5', width: '3.8', height: '3.8', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('rect', { x: '27.7', y: '15.5', width: '3.8', height: '3.8', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('rect', { x: '16.5', y: '22', width: '3.8', height: '3.8', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('rect', { x: '22.1', y: '22', width: '3.8', height: '3.8', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('rect', { x: '27.7', y: '22', width: '3.8', height: '3.8', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('rect', { x: '16.5', y: '28.5', width: '3.8', height: '3.8', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('rect', { x: '22.1', y: '28.5', width: '3.8', height: '3.8', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('rect', { x: '27.7', y: '28.5', width: '3.8', height: '3.8', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('rect', { x: '22.1', y: '35', width: '3.8', height: '4.5', fill: '#E9C46A', stroke: 'none' }));
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

export default SkyscraperIcon;
