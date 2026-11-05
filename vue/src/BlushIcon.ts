import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BlushIcon = defineComponent({
  name: 'BlushIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '24', cy: '24', r: '16', fill: '#E9C46A' }));
      children.push(h('circle', { cx: '18', cy: '20', r: '2', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('circle', { cx: '30', cy: '20', r: '2', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('circle', { cx: '14', cy: '28', r: '4', fill: '#F4A6A4', stroke: 'none' }));
      children.push(h('circle', { cx: '34', cy: '28', r: '4', fill: '#F4A6A4', stroke: 'none' }));
      children.push(h('path', { d: 'M19 28 C21 32 27 32 29 28', stroke: '#2A2A2A', 'stroke-width': sw(2.5), fill: 'none' }));
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

export default BlushIcon;
