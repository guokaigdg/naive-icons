import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const TreeIcon = defineComponent({
  name: 'TreeIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '24', cy: '18.24', r: '13.44', fill: '#588157' }));
      children.push(h('rect', { x: '20.16', y: '29.76', width: '7.68', height: '11.52', fill: '#8B5E3C' }));
      children.push(h('circle', { cx: '20.16', cy: '16.32', r: '1.44', fill: '#2A2A2A' }));
      children.push(h('circle', { cx: '27.84', cy: '16.32', r: '1.44', fill: '#2A2A2A' }));
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

export default TreeIcon;
