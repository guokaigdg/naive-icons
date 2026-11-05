import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const HospitalIcon = defineComponent({
  name: 'HospitalIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '10', y: '10', width: '28', height: '32', rx: '4', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M20 16 L28 16 L28 22 L34 22 L34 30 L28 30 L28 36 L20 36 L20 30 L14 30 L14 22 L20 22 Z', fill: '#E76F51', stroke: 'none' }));
      children.push(h('rect', { x: '13', y: '38', width: '5', height: '4', fill: '#2A9D8F', stroke: 'none' }));
      children.push(h('rect', { x: '30', y: '38', width: '5', height: '4', fill: '#2A9D8F', stroke: 'none' }));
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

export default HospitalIcon;
