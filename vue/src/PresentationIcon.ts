import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PresentationIcon = defineComponent({
  name: 'PresentationIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '6', y: '8', width: '36', height: '24', rx: '3', fill: '#264653' }));
      children.push(h('rect', { x: '9.5', y: '11.5', width: '29', height: '17', rx: '1.5', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('path', { d: 'M14 24 L20 17 L25 22 L32 15', stroke: '#E76F51', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('path', { d: 'M24 32 L24 40', stroke: '#2A2A2A', 'stroke-width': sw(3.5), fill: 'none' }));
      children.push(h('path', { d: 'M17 40 L31 40', stroke: '#2A2A2A', 'stroke-width': sw(3.5), fill: 'none' }));
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

export default PresentationIcon;
