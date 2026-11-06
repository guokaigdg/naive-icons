import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const TvRemoteIcon = defineComponent({
  name: 'TvRemoteIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M15 13 C15 9 17 7 24 7 C31 7 33 9 33 13 L33 36 C33 40 31 42 24 42 C17 42 15 40 15 36 Z', fill: '#264653' }));
      children.push(h('circle', { cx: '24', cy: '12', r: '2.2', fill: '#E76F51', stroke: 'none' }));
      children.push(h('rect', { x: '19', y: '17', width: '10', height: '8', rx: '2', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('circle', { cx: '20.5', cy: '31', r: '2', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '28', cy: '31', r: '2', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '20.5', cy: '37', r: '2', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '28', cy: '37', r: '2', fill: '#FAEDCD', stroke: 'none' }));
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

export default TvRemoteIcon;
