import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CraneIcon = defineComponent({
  name: 'CraneIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M10 40 L10 8 L40 8', stroke: '#E76F51', 'stroke-width': sw(4), fill: 'none' }));
      children.push(h('path', { d: 'M14 8 L14 14 M22 8 L22 14', stroke: '#E76F51', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('path', { d: 'M34 8 L34 22', stroke: '#2A2A2A', 'stroke-width': sw(3.5), fill: 'none' }));
      children.push(h('rect', { x: '30', y: '22', width: '8', height: '8', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M8 40 L40 40', stroke: '#2A2A2A', 'stroke-width': sw(3.5), fill: 'none' }));
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

export default CraneIcon;
