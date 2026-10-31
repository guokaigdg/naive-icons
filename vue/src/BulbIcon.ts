import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const BulbIcon = defineComponent({
  name: 'BulbIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M24 6 C 14 6 10 16 14 24 L14 30 L34 30 L34 24 C 38 16 34 6 24 6 Z', fill: '#E9C46A' }));
      children.push(h('rect', { x: '16', y: '30', width: '16', height: '6', fill: '#264653' }));
      children.push(h('rect', { x: '18', y: '36', width: '12', height: '4', fill: '#264653' }));
      children.push(h('circle', { cx: '20', cy: '18', r: '1.5', fill: '#2A2A2A' }));
      children.push(h('circle', { cx: '28', cy: '18', r: '1.5', fill: '#2A2A2A' }));
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

export default BulbIcon;
