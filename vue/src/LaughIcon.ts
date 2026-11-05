import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const LaughIcon = defineComponent({
  name: 'LaughIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '24', cy: '24', r: '16', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M15 20 Q 18 15 21 20', stroke: '#2A2A2A', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M27 20 Q 30 15 33 20', stroke: '#2A2A2A', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M14 26 Q 24 42 34 26 Z', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('path', { d: 'M17 27 L31 27', stroke: '#FFFFFF', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('circle', { cx: '12.5', cy: '27', r: '2.2', fill: '#F4A6A4', stroke: 'none' }));
      children.push(h('circle', { cx: '35.5', cy: '27', r: '2.2', fill: '#F4A6A4', stroke: 'none' }));
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

export default LaughIcon;
