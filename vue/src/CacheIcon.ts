import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CacheIcon = defineComponent({
  name: 'CacheIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '8', y: '8', width: '32', height: '32', rx: '4', fill: '#264653' }));
      children.push(h('rect', { x: '14', y: '14', width: '20', height: '8', rx: '2', fill: '#2A9D8F' }));
      children.push(h('rect', { x: '14', y: '26', width: '20', height: '8', rx: '2', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M18 18 H30 M18 30 H26', stroke: '#FAEDCD', 'stroke-width': sw(2), fill: 'none' }));
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

export default CacheIcon;
