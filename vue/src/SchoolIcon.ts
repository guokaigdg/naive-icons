import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const SchoolIcon = defineComponent({
  name: 'SchoolIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M6 20 L24 8 L42 20 Z', fill: '#E76F51' }));
      children.push(h('rect', { x: '9', y: '20', width: '30', height: '22', fill: '#FAEDCD' }));
      children.push(h('rect', { x: '20', y: '28', width: '8', height: '14', fill: '#264653', stroke: 'none' }));
      children.push(h('rect', { x: '13', y: '25', width: '5', height: '6', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('rect', { x: '30', y: '25', width: '5', height: '6', fill: '#E9C46A', stroke: 'none' }));
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

export default SchoolIcon;
