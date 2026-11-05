import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BudgetIcon = defineComponent({
  name: 'BudgetIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '7', y: '9', width: '34', height: '30', rx: '3', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M7 17 L41 17', stroke: '#264653', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('ellipse', { cx: '24', cy: '26', rx: '9', ry: '3', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('ellipse', { cx: '24', cy: '31', rx: '9', ry: '3', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('ellipse', { cx: '24', cy: '36', rx: '9', ry: '3', fill: '#E9C46A', stroke: 'none' }));
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

export default BudgetIcon;
