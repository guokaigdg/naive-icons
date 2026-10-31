import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ScissorsIcon = defineComponent({
  name: 'ScissorsIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M24 22 L11 8', stroke: '#2A2A2A', 'stroke-width': sw(4.5), fill: 'none' }));
      children.push(h('path', { d: 'M24 22 L37 8', stroke: '#2A2A2A', 'stroke-width': sw(4.5), fill: 'none' }));
      children.push(h('path', { d: 'M24 22 L17 31', stroke: '#2A2A2A', 'stroke-width': sw(4), fill: 'none' }));
      children.push(h('path', { d: 'M24 22 L31 31', stroke: '#2A2A2A', 'stroke-width': sw(4), fill: 'none' }));
      children.push(h('circle', { cx: '14', cy: '36', r: '6.5', fill: '#E76F51' }));
      children.push(h('circle', { cx: '34', cy: '36', r: '6.5', fill: '#E76F51' }));
      children.push(h('circle', { cx: '24', cy: '22', r: '2.2', fill: '#FAEDCD', stroke: 'none' }));
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

export default ScissorsIcon;
