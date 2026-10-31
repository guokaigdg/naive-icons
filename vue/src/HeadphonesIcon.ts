import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const HeadphonesIcon = defineComponent({
  name: 'HeadphonesIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M10 31 L 10 25 C 10 11 38 11 38 25 L 38 31', stroke: '#2A2A2A', 'stroke-width': sw(4), fill: 'none' }));
      children.push(h('rect', { x: '6', y: '27', width: '8', height: '12', rx: '3.5', fill: '#E76F51' }));
      children.push(h('rect', { x: '34', y: '27', width: '8', height: '12', rx: '3.5', fill: '#E76F51' }));
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

export default HeadphonesIcon;
