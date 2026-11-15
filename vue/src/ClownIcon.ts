import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ClownIcon = defineComponent({
  name: 'ClownIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '24', cy: '26', r: '12.5', fill: '#FFFFFF' }));
      children.push(h('path', { d: 'M17.5 12 C 17.5 7.5 20.5 5.5 24 5.5 C 27.5 5.5 30.5 7.5 30.5 12 Z', fill: '#2A9D8F' }));
      children.push(h('rect', { x: '14', y: '10.5', width: '20', height: '4', rx: '2', fill: '#2A9D8F' }));
      children.push(h('circle', { cx: '24', cy: '27', r: '3.4', fill: '#E76F51' }));
      children.push(h('circle', { cx: '19', cy: '22', r: '1.8', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('circle', { cx: '29', cy: '22', r: '1.8', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('path', { d: 'M16.5 30.5 C 19 37 29 37 31.5 30.5', stroke: '#E76F51', 'stroke-width': sw(3.2), fill: 'none' }));
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

export default ClownIcon;
