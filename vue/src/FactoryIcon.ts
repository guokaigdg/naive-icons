import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const FactoryIcon = defineComponent({
  name: 'FactoryIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M6 40 L6 24 L16 18 L16 24 L26 18 L26 24 L36 18 L36 40 Z', fill: '#264653' }));
      children.push(h('rect', { x: '32', y: '8', width: '8', height: '12', fill: '#E76F51' }));
      children.push(h('rect', { x: '10', y: '28', width: '6', height: '5', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('rect', { x: '19', y: '28', width: '6', height: '5', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('rect', { x: '28', y: '28', width: '6', height: '5', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('rect', { x: '10', y: '35', width: '6', height: '5', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('rect', { x: '28', y: '35', width: '6', height: '5', fill: '#FAEDCD', stroke: 'none' }));
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

export default FactoryIcon;
