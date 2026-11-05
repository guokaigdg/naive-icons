import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const DishwasherIcon = defineComponent({
  name: 'DishwasherIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '7', y: '6', width: '34', height: '36', rx: '4', fill: '#FFFFFF' }));
      children.push(h('path', { d: 'M7 16 L41 16', stroke: '#264653', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('path', { d: 'M12 23 L12 35 M36 23 L36 35', stroke: '#2A9D8F', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('path', { d: 'M13 24 L35 24 M13 30 L35 30 M13 36 L35 36', stroke: '#2A9D8F', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('circle', { cx: '34', cy: '11', r: '2', fill: '#E76F51', stroke: 'none' }));
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

export default DishwasherIcon;
