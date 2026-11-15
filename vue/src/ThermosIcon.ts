import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ThermosIcon = defineComponent({
  name: 'ThermosIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '15.5', y: '5', width: '17', height: '7.5', rx: '2.5', fill: '#E76F51' }));
      children.push(h('rect', { x: '17.5', y: '12', width: '13', height: '3.5', fill: '#264653', 'stroke-width': sw(2.4) }));
      children.push(h('rect', { x: '13.5', y: '14.5', width: '21', height: '28', rx: '5', fill: '#2A9D8F' }));
      children.push(h('path', { d: 'M34.5 20 C 39.5 20 39.5 30 34.5 30', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M14.5 36.5 H33.5', stroke: '#FAEDCD', 'stroke-width': sw(2.4), fill: 'none' }));
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

export default ThermosIcon;
