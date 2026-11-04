import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MegaphoneIcon = defineComponent({
  name: 'MegaphoneIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M7 20 L24 11 L24 37 L7 28 Z', fill: '#E76F51' }));
      children.push(h('rect', { x: '24', y: '9', width: '8', height: '30', rx: '3', fill: '#F4A6A4' }));
      children.push(h('path', { d: 'M12 29 L15 41 L21 41 L18 31 Z', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M36 16 L40 20', stroke: '#2A9D8F', 'stroke-width': sw(3.5), fill: 'none' }));
      children.push(h('path', { d: 'M36 28 L40 24', stroke: '#2A9D8F', 'stroke-width': sw(3.5), fill: 'none' }));
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

export default MegaphoneIcon;
