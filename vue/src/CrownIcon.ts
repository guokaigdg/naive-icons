import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const CrownIcon = defineComponent({
  name: 'CrownIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M8 16 L8 34 L40 34 L40 16 L32 24 L24 12 L16 24 Z', fill: '#E9C46A' }));
      children.push(h('circle', { cx: '16', cy: '28', r: '2', fill: '#E76F51', stroke: 'none' }));
      children.push(h('circle', { cx: '24', cy: '28', r: '2', fill: '#2A9D8F', stroke: 'none' }));
      children.push(h('circle', { cx: '32', cy: '28', r: '2', fill: '#264653', stroke: 'none' }));
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

export default CrownIcon;
