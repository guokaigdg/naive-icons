import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const FirstAidIcon = defineComponent({
  name: 'FirstAidIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '8', y: '14', width: '32', height: '26', rx: '3', fill: '#FFFFFF' }));
      children.push(h('path', { d: 'M18 14 L18 10 C18 8 30 8 30 10 L30 14', stroke: '#2A2A2A', fill: 'none' }));
      children.push(h('rect', { x: '21', y: '20', width: '6', height: '14', fill: '#E76F51', stroke: 'none' }));
      children.push(h('rect', { x: '17', y: '24', width: '14', height: '6', fill: '#E76F51', stroke: 'none' }));
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

export default FirstAidIcon;
