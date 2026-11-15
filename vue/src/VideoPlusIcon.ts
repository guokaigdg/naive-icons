import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const VideoPlusIcon = defineComponent({
  name: 'VideoPlusIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '4.8', y: '14.4', width: '26.88', height: '19.2', rx: '3.84', fill: '#264653' }));
      children.push(h('path', { d: 'M31.68 21.12 L43.2 14.4 L43.2 33.6 L31.68 26.88 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M18.24 19.2 L18.24 28.8 M13.44 24 L23.04 24', stroke: '#FAEDCD', 'stroke-width': sw(3.5) }));
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

export default VideoPlusIcon;
