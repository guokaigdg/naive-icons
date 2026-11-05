import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const DiceIcon = defineComponent({
  name: 'DiceIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '10', y: '10', width: '28', height: '28', rx: '5', fill: '#FAEDCD' }));
      children.push(h('circle', { cx: '17', cy: '17', r: '2.5', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('circle', { cx: '31', cy: '17', r: '2.5', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('circle', { cx: '24', cy: '24', r: '2.5', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('circle', { cx: '17', cy: '31', r: '2.5', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('circle', { cx: '31', cy: '31', r: '2.5', fill: '#2A2A2A', stroke: 'none' }));
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

export default DiceIcon;
