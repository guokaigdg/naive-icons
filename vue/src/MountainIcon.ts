import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MountainIcon = defineComponent({
  name: 'MountainIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M4.8 36.48 L17.28 15.36 L24 25.92 L30.72 13.44 L43.2 36.48 Z', fill: '#588157' }));
      children.push(h('path', { d: 'M30.72 13.44 L34.08 18.72 L31.68 17.76 L29.76 19.68 L28.32 17.76 Z', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M17.28 15.36 L19.68 19.2 L17.76 18.24 L16.13 20.16 L14.98 18.72 Z', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M30.72 13.44 L30.72 7.2', stroke: '#2A2A2A', 'stroke-width': sw(2) }));
      children.push(h('path', { d: 'M30.72 7.2 L36.96 9.12 L30.72 11.04 Z', fill: '#E76F51' }));
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

export default MountainIcon;
