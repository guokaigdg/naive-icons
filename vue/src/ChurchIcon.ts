import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ChurchIcon = defineComponent({
  name: 'ChurchIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M24 6 L24 14 M20 10 L28 10', stroke: '#264653', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('path', { d: 'M10 26 L24 12 L38 26 Z', fill: '#E76F51' }));
      children.push(h('rect', { x: '12', y: '26', width: '24', height: '15', fill: '#FFFFFF' }));
      children.push(h('path', { d: 'M24 32 C21 32 20 34 20 37 L20 41 L28 41 L28 37 C28 34 27 32 24 32 Z', fill: '#264653', stroke: 'none' }));
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

export default ChurchIcon;
