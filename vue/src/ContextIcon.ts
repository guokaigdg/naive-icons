import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const ContextIcon = defineComponent({
  name: 'ContextIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M7 11 H29 V25 H17 L11 31 V25 H7 Z', fill: '#2A9D8F' }));
      children.push(h('path', { d: 'M19 21 H41 V35 H29 L23 41 V35 H19 Z', fill: '#E9C46A' }));
      children.push(h('circle', { cx: '14', cy: '18', r: '1.8', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('circle', { cx: '26', cy: '28', r: '1.8', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('circle', { cx: '33', cy: '28', r: '1.8', fill: '#2A2A2A', stroke: 'none' }));
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

export default ContextIcon;
