import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const CalculatorIcon = defineComponent({
  name: 'CalculatorIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '13', y: '6', width: '22', height: '36', rx: '4', fill: '#E76F51' }));
      children.push(h('rect', { x: '17', y: '10', width: '14', height: '8', rx: '2', fill: '#FAEDCD' }));
      children.push(h('circle', { cx: '20', cy: '25', r: '1.6', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('circle', { cx: '28', cy: '25', r: '1.6', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('circle', { cx: '20', cy: '31', r: '1.6', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('circle', { cx: '28', cy: '31', r: '1.6', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('circle', { cx: '20', cy: '37', r: '1.6', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('circle', { cx: '28', cy: '37', r: '1.6', fill: '#2A2A2A', stroke: 'none' }));
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

export default CalculatorIcon;
