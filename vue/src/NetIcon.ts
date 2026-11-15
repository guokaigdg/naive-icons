import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const NetIcon = defineComponent({
  name: 'NetIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M8 9 V40 M40 9 V40', stroke: '#2A2A2A', 'stroke-width': sw(3.5), fill: 'none' }));
      children.push(h('rect', { x: '8', y: '18', width: '32', height: '15', fill: '#FFFFFF' }));
      children.push(h('path', { d: 'M8 23.5 H40 M8 28.5 H40', stroke: '#2A2A2A', 'stroke-width': sw(1.6), fill: 'none' }));
      children.push(h('path', { d: 'M16 18 V33 M24 18 V33 M32 18 V33', stroke: '#2A2A2A', 'stroke-width': sw(1.6), fill: 'none' }));
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

export default NetIcon;
