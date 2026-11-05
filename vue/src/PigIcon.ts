import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const PigIcon = defineComponent({
  name: 'PigIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '24', cy: '26', r: '13', fill: '#F4A6A4' }));
      children.push(h('path', { d: 'M13 16 L11 8 L20 14 Z', fill: '#F4A6A4' }));
      children.push(h('path', { d: 'M35 16 L37 8 L28 14 Z', fill: '#F4A6A4' }));
      children.push(h('ellipse', { cx: '24', cy: '31', rx: '6', ry: '4.5', fill: '#E76F51' }));
      children.push(h('circle', { cx: '22', cy: '31', r: '1.2', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('circle', { cx: '26', cy: '31', r: '1.2', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('circle', { cx: '19', cy: '22', r: '1.8', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('circle', { cx: '29', cy: '22', r: '1.8', fill: '#2A2A2A', stroke: 'none' }));
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

export default PigIcon;
