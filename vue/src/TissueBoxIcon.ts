import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const TissueBoxIcon = defineComponent({
  name: 'TissueBoxIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '6', y: '26', width: '36', height: '15.5', rx: '3.5', fill: '#2A9D8F' }));
      children.push(h('ellipse', { cx: '24', cy: '26', rx: '9', ry: '3', fill: '#264653', stroke: 'none' }));
      children.push(h('path', { d: 'M16 27 C 15 22 12 19 11 15 C 15 13.5 20 15 22 19 C 23 14 28 12.5 30 16.5 C 32 20 32 24 31 27 Z', fill: '#FFFFFF' }));
      children.push(h('path', { d: 'M9 33 H39', stroke: '#FAEDCD', 'stroke-width': sw(2.2), fill: 'none' }));
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

export default TissueBoxIcon;
