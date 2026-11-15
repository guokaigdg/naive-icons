import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const UniversityIcon = defineComponent({
  name: 'UniversityIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M5 20 L9 13 H39 L43 20 Z', fill: '#E76F51' }));
      children.push(h('rect', { x: '9', y: '20', width: '30', height: '19', fill: '#FAEDCD' }));
      children.push(h('rect', { x: '10', y: '23', width: '28', height: '16', fill: '#264653' }));
      children.push(h('rect', { x: '12', y: '24', width: '4', height: '14', fill: '#FAEDCD' }));
      children.push(h('rect', { x: '19', y: '24', width: '4', height: '14', fill: '#FAEDCD' }));
      children.push(h('rect', { x: '26', y: '24', width: '4', height: '14', fill: '#FAEDCD' }));
      children.push(h('rect', { x: '33', y: '24', width: '4', height: '14', fill: '#FAEDCD' }));
      children.push(h('circle', { cx: '24', cy: '16.5', r: '2.2', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('path', { d: 'M7 39 H41 M6 42 H42', stroke: '#2A2A2A', 'stroke-width': sw(3), fill: 'none' }));
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

export default UniversityIcon;
