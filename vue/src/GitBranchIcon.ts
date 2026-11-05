import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const GitBranchIcon = defineComponent({
  name: 'GitBranchIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '14', cy: '36', r: '5', fill: '#2A9D8F' }));
      children.push(h('circle', { cx: '14', cy: '12', r: '5', fill: '#E9C46A' }));
      children.push(h('circle', { cx: '32', cy: '20', r: '5', fill: '#E76F51' }));
      children.push(h('path', { d: 'M14 17 V31' }));
      children.push(h('path', { d: 'M32 25 C32 32 14 28 14 31' }));
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

export default GitBranchIcon;
