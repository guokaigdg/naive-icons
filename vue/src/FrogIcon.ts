import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FrogIcon = defineComponent({
  name: 'FrogIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '14', cy: '14', r: '6.5', fill: '#588157' }));
      children.push(h('circle', { cx: '34', cy: '14', r: '6.5', fill: '#588157' }));
      children.push(h('circle', { cx: '14', cy: '14', r: '3.5', fill: '#FFFFFF' }));
      children.push(h('circle', { cx: '34', cy: '14', r: '3.5', fill: '#FFFFFF' }));
      children.push(h('circle', { cx: '14', cy: '15', r: '1.8', fill: '#2A2A2A' }));
      children.push(h('circle', { cx: '34', cy: '15', r: '1.8', fill: '#2A2A2A' }));
      children.push(h('ellipse', { cx: '24', cy: '29', rx: '16', ry: '12', fill: '#588157' }));
      children.push(h('path', { d: 'M13 29 Q 24 39 35 29', stroke: '#2A2A2A', fill: 'none', 'stroke-width': sw(2.5) }));
      children.push(h('circle', { cx: '11', cy: '33', r: '2', fill: '#F4A6A4' }));
      children.push(h('circle', { cx: '37', cy: '33', r: '2', fill: '#F4A6A4' }));
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

export default FrogIcon;
