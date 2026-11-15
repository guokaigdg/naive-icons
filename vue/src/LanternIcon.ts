import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const LanternIcon = defineComponent({
  name: 'LanternIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M24 4.6 V7', 'stroke-width': sw(2.6), fill: 'none' }));
      children.push(h('rect', { x: '14.5', y: '10.5', width: '19', height: '4.5', rx: '1.5', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M18 15.5 H30 C 35 18 35 30 30 32.5 H18 C 13 30 13 18 18 15.5 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M24 16 V32', stroke: '#E9C46A', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('path', { d: 'M19 17 C 17.2 20.5 17.2 27.5 19 31', stroke: '#E9C46A', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('path', { d: 'M29 17 C 30.8 20.5 30.8 27.5 29 31', stroke: '#E9C46A', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('rect', { x: '15.5', y: '32', width: '17', height: '4', rx: '1.5', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M24 36 V39.5', 'stroke-width': sw(2.6), fill: 'none' }));
      children.push(h('path', { d: 'M21 39.5 H27 L26 44 H22 Z', fill: '#E76F51', 'stroke-width': sw(2) }));
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

export default LanternIcon;
