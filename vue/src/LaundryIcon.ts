import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const LaundryIcon = defineComponent({
  name: 'LaundryIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '8', y: '8.6', width: '32', height: '32.6', rx: '3.4', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M8 16.4 H 40', stroke: '#2A2A2A', 'stroke-width': sw(2.2), fill: 'none' }));
      children.push(h('circle', { cx: '33', cy: '12.6', r: '2.4', fill: '#2A9D8F' }));
      children.push(h('rect', { x: '12', y: '11.4', width: '7', height: '2.4', rx: '1.2', fill: '#264653', stroke: 'none' }));
      children.push(h('circle', { cx: '24', cy: '27.8', r: '9.6', fill: '#264653' }));
      children.push(h('circle', { cx: '24', cy: '27.8', r: '7', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('path', { d: 'M18.4 30.4 C 20.4 33.4 25 34.6 28.6 33.2', stroke: '#2A9D8F', 'stroke-width': sw(2.6), fill: 'none' }));
      children.push(h('circle', { cx: '21.4', cy: '26', r: '1.8', fill: '#2A9D8F', stroke: 'none' }));
      children.push(h('circle', { cx: '27.6', cy: '24.6', r: '1.3', fill: '#2A9D8F', stroke: 'none' }));
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

export default LaundryIcon;
