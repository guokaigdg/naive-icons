import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BackpackIcon = defineComponent({
  name: 'BackpackIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '9', y: '14', width: '30', height: '26', rx: '7', fill: '#2A9D8F' }));
      children.push(h('path', { d: 'M18 14 C 18 8 30 8 30 14', stroke: '#2A2A2A', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('rect', { x: '16', y: '27', width: '16', height: '9', rx: '3', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M20 27 L28 27', stroke: '#8B5E3C', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('circle', { cx: '24', cy: '32', r: '1.6', fill: '#8B5E3C', stroke: 'none' }));
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

export default BackpackIcon;
