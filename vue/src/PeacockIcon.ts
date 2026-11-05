import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const PeacockIcon = defineComponent({
  name: 'PeacockIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '24', cy: '24', r: '16', fill: '#2A9D8F' }));
      children.push(h('circle', { cx: '24', cy: '24', r: '4', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('circle', { cx: '14', cy: '14', r: '2.5', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('circle', { cx: '34', cy: '14', r: '2.5', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('circle', { cx: '12', cy: '27', r: '2.5', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('circle', { cx: '36', cy: '27', r: '2.5', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('ellipse', { cx: '24', cy: '34', rx: '5', ry: '7', fill: '#264653' }));
      children.push(h('circle', { cx: '24', cy: '27', r: '3.5', fill: '#264653' }));
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

export default PeacockIcon;
