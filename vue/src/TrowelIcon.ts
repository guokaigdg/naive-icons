import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const TrowelIcon = defineComponent({
  name: 'TrowelIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M9 26 C 9 22.5 39 22.5 39 26 L26 39.5 C 25 40.8 23 40.8 22 39.5 Z', fill: '#FAEDCD' }));
      children.push(h('rect', { x: '20', y: '7', width: '8', height: '17', rx: '4', fill: '#8B5E3C' }));
      children.push(h('rect', { x: '18.5', y: '18.5', width: '11', height: '4.5', rx: '1.5', fill: '#264653', 'stroke-width': sw(2.2) }));
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

export default TrowelIcon;
