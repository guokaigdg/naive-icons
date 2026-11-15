import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const GraterIcon = defineComponent({
  name: 'GraterIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M14 11 L34 11 L38 38 L10 38 Z', fill: '#FFFFFF' }));
      children.push(h('path', { d: 'M17 11 C 17 7.5 31 7.5 31 11', fill: 'none' }));
      children.push(h('circle', { cx: '18', cy: '19', r: '1.5', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('circle', { cx: '24', cy: '19', r: '1.5', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('circle', { cx: '30', cy: '19', r: '1.5', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('circle', { cx: '17', cy: '26', r: '1.5', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('circle', { cx: '24', cy: '26', r: '1.5', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('circle', { cx: '31', cy: '26', r: '1.5', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('circle', { cx: '16', cy: '33', r: '1.5', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('circle', { cx: '24', cy: '33', r: '1.5', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('circle', { cx: '32', cy: '33', r: '1.5', fill: '#2A2A2A', stroke: 'none' }));
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

export default GraterIcon;
