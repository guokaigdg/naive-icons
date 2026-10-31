import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const HomeIcon = defineComponent({
  name: 'HomeIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M6 24 L24 8 L42 24', fill: '#F4A6A4' }));
      children.push(h('path', { d: 'M10 22 L10 40 L38 40 L38 22', fill: '#E9C46A' }));
      children.push(h('rect', { x: '20', y: '28', width: '8', height: '12', fill: '#264653' }));
      children.push(h('circle', { cx: '16', cy: '30', r: '1.5', fill: '#2A2A2A' }));
      children.push(h('circle', { cx: '32', cy: '30', r: '1.5', fill: '#2A2A2A' }));
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

export default HomeIcon;
