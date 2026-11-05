import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const LibraryIcon = defineComponent({
  name: 'LibraryIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '8', y: '10', width: '7', height: '26', fill: '#E76F51' }));
      children.push(h('rect', { x: '17', y: '14', width: '7', height: '22', fill: '#2A9D8F' }));
      children.push(h('rect', { x: '26', y: '8', width: '7', height: '28', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M35 12 L41 14 L37 38 L31 36 Z', fill: '#264653' }));
      children.push(h('path', { d: 'M6 40 L42 40', stroke: '#2A2A2A', 'stroke-width': sw(3.5), fill: 'none' }));
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

export default LibraryIcon;
