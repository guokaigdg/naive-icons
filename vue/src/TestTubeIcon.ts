import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const TestTubeIcon = defineComponent({
  name: 'TestTubeIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(
        h('g', { transform: 'rotate(-18 24 24)' }, [
          h('path', { d: 'M18 7 V32.5 C 18 37 30 37 30 32.5 V7 Z', fill: '#FAEDCD' }),
          h('path', { d: 'M19.8 20 V31.8 C 19.8 34.9 28.2 34.9 28.2 31.8 V20 Z', fill: '#2A9D8F', stroke: 'none' }),
          h('rect', { x: '16.5', y: '5', width: '15', height: '4.5', rx: '2', fill: '#264653' }),
        ]),
      );
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

export default TestTubeIcon;
