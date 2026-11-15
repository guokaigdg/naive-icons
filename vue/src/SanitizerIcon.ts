import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SanitizerIcon = defineComponent({
  name: 'SanitizerIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '15', y: '16', width: '18', height: '24', rx: '4', fill: '#2A9D8F' }));
      children.push(h('rect', { x: '21', y: '12', width: '6', height: '5', fill: '#264653' }));
      children.push(h('path', { d: 'M21 13 H14.5', stroke: '#264653', 'stroke-width': sw(3.5), fill: 'none' }));
      children.push(h('rect', { x: '19', y: '22', width: '10', height: '11', rx: '1.5', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M24 25 C 26.2 27.6 26.2 28.7 24 30.2 C 21.8 28.7 21.8 27.6 24 25 Z', fill: '#2A9D8F', stroke: 'none' }));
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

export default SanitizerIcon;
