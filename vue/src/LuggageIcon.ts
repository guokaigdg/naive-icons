import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const LuggageIcon = defineComponent({
  name: 'LuggageIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '9', y: '14', width: '30', height: '24', rx: '3', fill: '#2A9D8F' }));
      children.push(h('path', { d: 'M17 14 L17 10 C17 8 20 7 24 7 C28 7 31 8 31 10 L31 14', stroke: '#2A2A2A', 'stroke-width': sw(3.5), fill: 'none' }));
      children.push(h('path', { d: 'M9 23 L39 23', stroke: '#FAEDCD', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('circle', { cx: '15', cy: '40', r: '2.5', fill: '#264653', stroke: 'none' }));
      children.push(h('circle', { cx: '33', cy: '40', r: '2.5', fill: '#264653', stroke: 'none' }));
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

export default LuggageIcon;
