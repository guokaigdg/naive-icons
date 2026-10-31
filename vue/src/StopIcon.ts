import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const StopIcon = defineComponent({
  name: 'StopIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '24', cy: '24', r: '19.2', fill: '#2A9D8F' }));
      children.push(h('rect', { x: '17.28', y: '17.28', width: '13.44', height: '13.44', rx: '2.4', fill: '#E9C46A' }));
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

export default StopIcon;
