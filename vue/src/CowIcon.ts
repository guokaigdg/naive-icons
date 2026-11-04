import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const CowIcon = defineComponent({
  name: 'CowIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M15 19 C 15 13 19 11 24 11 C 29 11 33 13 33 19 C 36 25 36 34 32 39 C 29 42 19 42 16 39 C 12 34 12 25 15 19 Z', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M15 17 C 11 15 8 11 9 8 C 13 8 16 11 16 15 Z', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M33 17 C 37 15 40 11 39 8 C 35 8 32 11 32 15 Z', fill: '#FAEDCD' }));
      children.push(h('ellipse', { cx: '24', cy: '33', rx: '5', ry: '3.6', fill: '#F4A6A4', stroke: 'none' }));
      children.push(h('circle', { cx: '19', cy: '22', r: '1.8', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('circle', { cx: '29', cy: '22', r: '1.8', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('circle', { cx: '29', cy: '31', r: '3', fill: '#2A2A2A', stroke: 'none' }));
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

export default CowIcon;
