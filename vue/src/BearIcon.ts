import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BearIcon = defineComponent({
  name: 'BearIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '12', cy: '14', r: '5', fill: '#8B5E3C' }));
      children.push(h('circle', { cx: '36', cy: '14', r: '5', fill: '#8B5E3C' }));
      children.push(h('circle', { cx: '12', cy: '14', r: '2', fill: '#F4A6A4' }));
      children.push(h('circle', { cx: '36', cy: '14', r: '2', fill: '#F4A6A4' }));
      children.push(h('circle', { cx: '24', cy: '27', r: '15', fill: '#8B5E3C' }));
      children.push(h('circle', { cx: '18', cy: '24', r: '2.5', fill: '#FFFFFF' }));
      children.push(h('circle', { cx: '30', cy: '24', r: '2.5', fill: '#FFFFFF' }));
      children.push(h('circle', { cx: '18', cy: '25', r: '1.3', fill: '#2A2A2A' }));
      children.push(h('circle', { cx: '30', cy: '25', r: '1.3', fill: '#2A2A2A' }));
      children.push(h('ellipse', { cx: '24', cy: '32', rx: '6', ry: '4.5', fill: '#FAEDCD' }));
      children.push(h('ellipse', { cx: '24', cy: '30.5', rx: '2.5', ry: '1.8', fill: '#2A2A2A' }));
      children.push(h('path', { d: 'M24 32.3 L24 34 M24 34 Q 21 36 19.5 34.5 M24 34 Q 27 36 28.5 34.5', stroke: '#2A2A2A', fill: 'none', 'stroke-width': sw(1.8) }));
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

export default BearIcon;
