import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const TruckIcon = defineComponent({
  name: 'TruckIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M6 13 L28 13 L28 32 L6 32 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M28 19 L35 19 L41 27 L41 32 L28 32 Z', fill: '#FAEDCD' }));
      children.push(h('circle', { cx: '14', cy: '36', r: '4.5', fill: '#2A2A2A' }));
      children.push(h('circle', { cx: '34', cy: '36', r: '4.5', fill: '#2A2A2A' }));
      children.push(h('circle', { cx: '14', cy: '36', r: '1.5', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '34', cy: '36', r: '1.5', fill: '#FAEDCD', stroke: 'none' }));
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

export default TruckIcon;
