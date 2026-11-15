import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const RopeIcon = defineComponent({
  name: 'RopeIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('ellipse', { cx: '24', cy: '19', rx: '15', ry: '7', stroke: '#2A2A2A', 'stroke-width': sw(8.5), fill: 'none' }));
      children.push(h('ellipse', { cx: '24', cy: '19', rx: '15', ry: '7', stroke: '#8B5E3C', 'stroke-width': sw(5), fill: 'none' }));
      children.push(h('ellipse', { cx: '24', cy: '28', rx: '15', ry: '7', stroke: '#2A2A2A', 'stroke-width': sw(8.5), fill: 'none' }));
      children.push(h('ellipse', { cx: '24', cy: '28', rx: '15', ry: '7', stroke: '#8B5E3C', 'stroke-width': sw(5), fill: 'none' }));
      children.push(h('path', { d: 'M37 31 C 40 33 40 37 38 39', stroke: '#2A2A2A', 'stroke-width': sw(8.5), fill: 'none' }));
      children.push(h('path', { d: 'M37 31 C 40 33 40 37 38 39', stroke: '#8B5E3C', 'stroke-width': sw(5), fill: 'none' }));
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

export default RopeIcon;
