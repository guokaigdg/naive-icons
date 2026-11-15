import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const YachtIcon = defineComponent({
  name: 'YachtIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M5 29 H43 L37 38 C 29 39.5 17 39.5 12 38 Z', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M9 32.5 H39', stroke: '#E76F51', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('rect', { x: '15', y: '20', width: '16', height: '9', rx: '2', fill: '#264653' }));
      children.push(h('rect', { x: '17.5', y: '22.5', width: '4', height: '3.5', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('rect', { x: '23', y: '22.5', width: '4', height: '3.5', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('path', { d: 'M24 20 L24 12', stroke: '#2A2A2A', 'stroke-width': sw(2.8), fill: 'none' }));
      children.push(h('path', { d: 'M24 12 L33 14.5 L24 17 Z', fill: '#E76F51' }));
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

export default YachtIcon;
