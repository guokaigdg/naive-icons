import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BanknoteIcon = defineComponent({
  name: 'BanknoteIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '6', y: '13', width: '36', height: '22', rx: '3', fill: '#588157' }));
      children.push(h('circle', { cx: '24', cy: '24', r: '6', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('path', { d: 'M24 19 L24 24 L28 28', stroke: '#264653', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('path', { d: 'M11 19 L11 29 M37 19 L37 29', stroke: '#FAEDCD', 'stroke-width': sw(2.5), fill: 'none' }));
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

export default BanknoteIcon;
