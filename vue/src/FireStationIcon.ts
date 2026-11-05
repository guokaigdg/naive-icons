import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FireStationIcon = defineComponent({
  name: 'FireStationIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M6 20 L24 8 L42 20 Z', fill: '#E76F51' }));
      children.push(h('rect', { x: '8', y: '20', width: '32', height: '20', fill: '#FAEDCD' }));
      children.push(h('rect', { x: '14', y: '26', width: '20', height: '14', fill: '#264653', stroke: 'none' }));
      children.push(h('path', { d: 'M14 31 H34 M14 36 H34', stroke: '#FAEDCD', 'stroke-width': sw(2) }));
      children.push(h('path', { d: 'M24 30 C24 27 26 26 26 28 C28 26 28 30 26 32 C24 33 24 32 24 30 Z', fill: '#E76F51', stroke: 'none' }));
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

export default FireStationIcon;
