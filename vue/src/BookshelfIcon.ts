import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BookshelfIcon = defineComponent({
  name: 'BookshelfIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '8', y: '5', width: '32', height: '38', rx: '2', fill: '#8B5E3C' }));
      children.push(h('rect', { x: '11.5', y: '8.5', width: '25', height: '31', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('path', { d: 'M11.5 21 H36.5 M11.5 32.5 H36.5', stroke: '#8B5E3C', 'stroke-width': sw(2.4), fill: 'none' }));
      children.push(h('rect', { x: '14', y: '10', width: '4.5', height: '10', fill: '#E76F51', 'stroke-width': sw(2.2) }));
      children.push(h('rect', { x: '20', y: '11.5', width: '4.5', height: '8.5', fill: '#2A9D8F', 'stroke-width': sw(2.2) }));
      children.push(h('rect', { x: '26', y: '9.5', width: '4.5', height: '10.5', fill: '#E9C46A', 'stroke-width': sw(2.2) }));
      children.push(h('rect', { x: '14', y: '23', width: '4.5', height: '8.5', fill: '#2A9D8F', 'stroke-width': sw(2.2) }));
      children.push(h('rect', { x: '20', y: '24.5', width: '4.5', height: '7', fill: '#F4A6A4', 'stroke-width': sw(2.2) }));
      children.push(h('rect', { x: '28', y: '23', width: '4.5', height: '8.5', fill: '#E76F51', 'stroke-width': sw(2.2) }));
      children.push(h('rect', { x: '15', y: '34.5', width: '4.5', height: '4.5', fill: '#E9C46A', 'stroke-width': sw(2.2) }));
      children.push(h('rect', { x: '21', y: '34.5', width: '4.5', height: '4.5', fill: '#2A9D8F', 'stroke-width': sw(2.2) }));
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

export default BookshelfIcon;
