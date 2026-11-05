import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CableCarIcon = defineComponent({
  name: 'CableCarIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M6 10 L42 16', stroke: '#264653', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('path', { d: 'M24 13 L24 18', stroke: '#264653', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('rect', { x: '16', y: '18', width: '16', height: '14', rx: '3', fill: '#E76F51' }));
      children.push(h('path', { d: 'M19 24 L29 24', stroke: '#FAEDCD', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('path', { d: 'M12 38 L36 38', stroke: '#264653', 'stroke-width': sw(2.5), fill: 'none' }));
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

export default CableCarIcon;
