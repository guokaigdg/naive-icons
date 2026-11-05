import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ArcheryIcon = defineComponent({
  name: 'ArcheryIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M14 9 C6 19 6 29 14 39', stroke: '#8B5E3C', 'stroke-width': sw(3.5), fill: 'none' }));
      children.push(h('path', { d: 'M14 9 L14 39', stroke: '#2A2A2A', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('path', { d: 'M14 24 L40 24', stroke: '#264653', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M34 19 L40 24 L34 29', stroke: '#264653', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M18 20 L18 24 M18 24 L18 28', stroke: '#E76F51', 'stroke-width': sw(3), fill: 'none' }));
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

export default ArcheryIcon;
