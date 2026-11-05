import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const DroneIcon = defineComponent({
  name: 'DroneIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '19', y: '20', width: '10', height: '8', rx: '2', fill: '#264653' }));
      children.push(h('path', { d: 'M19 22 L12 15 M29 22 L36 15 M19 26 L12 33 M29 26 L36 33', 'stroke-width': sw(2.5) }));
      children.push(h('ellipse', { cx: '10', cy: '13', rx: '6', ry: '2.5', fill: '#E76F51', stroke: 'none' }));
      children.push(h('ellipse', { cx: '38', cy: '13', rx: '6', ry: '2.5', fill: '#E76F51', stroke: 'none' }));
      children.push(h('ellipse', { cx: '10', cy: '35', rx: '6', ry: '2.5', fill: '#E76F51', stroke: 'none' }));
      children.push(h('ellipse', { cx: '38', cy: '35', rx: '6', ry: '2.5', fill: '#E76F51', stroke: 'none' }));
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

export default DroneIcon;
