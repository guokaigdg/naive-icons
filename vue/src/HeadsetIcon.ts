import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const HeadsetIcon = defineComponent({
  name: 'HeadsetIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M9 27 V21 C 9 12.7 15.7 6 24 6 C 32.3 6 39 12.7 39 21 V27', stroke: '#2A2A2A', fill: 'none' }));
      children.push(h('rect', { x: '5', y: '24', width: '9', height: '15', rx: '4.5', fill: '#2A9D8F' }));
      children.push(h('rect', { x: '34', y: '24', width: '9', height: '15', rx: '4.5', fill: '#2A9D8F' }));
      children.push(h('path', { d: 'M39 34 C 39 39 35 41 30.5 41', stroke: '#2A2A2A', fill: 'none' }));
      children.push(h('circle', { cx: '29', cy: '41', r: '2.6', fill: '#E76F51', stroke: 'none' }));
      children.push(h('path', { d: 'M9.5 29 V34', stroke: '#FAEDCD', 'stroke-width': sw(2), fill: 'none' }));
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

export default HeadsetIcon;
