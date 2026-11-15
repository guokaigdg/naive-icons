import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PancakeIcon = defineComponent({
  name: 'PancakeIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('ellipse', { cx: '24', cy: '33.5', rx: '17', ry: '5.5', fill: '#8B5E3C', 'stroke-width': sw(2.5) }));
      children.push(h('ellipse', { cx: '24', cy: '27', rx: '16.5', ry: '5.2', fill: '#E9C46A', 'stroke-width': sw(2.5) }));
      children.push(h('ellipse', { cx: '24', cy: '20.5', rx: '16', ry: '5', fill: '#FAEDCD', 'stroke-width': sw(2.5) }));
      children.push(h('rect', { x: '19.5', y: '12', width: '9', height: '6.5', rx: '1.5', transform: 'rotate(-6 24 15)', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M13 20 C 13 17.5 35 17.5 35 20', stroke: '#E76F51', 'stroke-width': sw(2.4), fill: 'none' }));
      children.push(h('circle', { cx: '20', cy: '31', r: '1.2', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '28', cy: '32.5', r: '1.2', fill: '#FAEDCD', stroke: 'none' }));
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

export default PancakeIcon;
