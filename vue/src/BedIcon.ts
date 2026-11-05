import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BedIcon = defineComponent({
  name: 'BedIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '6', y: '16', width: '5', height: '18', rx: '2', fill: '#264653' }));
      children.push(h('rect', { x: '11', y: '24', width: '31', height: '7', rx: '2', fill: '#FAEDCD' }));
      children.push(h('rect', { x: '11', y: '31', width: '31', height: '5', rx: '1', fill: '#8B5E3C' }));
      children.push(h('rect', { x: '14', y: '19', width: '10', height: '6', rx: '2', fill: '#F4A6A4' }));
      children.push(h('path', { d: 'M28 22 L38 22 L38 30 L28 30 Z', fill: '#2A9D8F', stroke: 'none' }));
      children.push(h('path', { d: 'M9 36 L9 40 M38 36 L38 40', stroke: '#8B5E3C', 'stroke-width': sw(3), fill: 'none' }));
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

export default BedIcon;
