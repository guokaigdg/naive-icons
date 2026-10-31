import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SmileIcon = defineComponent({
  name: 'SmileIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '24', cy: '24', r: '16', fill: '#E9C46A' }));
      children.push(h('circle', { cx: '18', cy: '20', r: '2', fill: '#2A2A2A' }));
      children.push(h('circle', { cx: '30', cy: '20', r: '2', fill: '#2A2A2A' }));
      children.push(h('path', { d: 'M15 27 Q 24 36 33 27', stroke: '#2A2A2A', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('circle', { cx: '13.5', cy: '26', r: '2.2', fill: '#F4A6A4' }));
      children.push(h('circle', { cx: '34.5', cy: '26', r: '2.2', fill: '#F4A6A4' }));
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

export default SmileIcon;
