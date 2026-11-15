import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const CampfireIcon = defineComponent({
  name: 'CampfireIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '8.5', y: '33', width: '27', height: '6.6', rx: '3.3', transform: 'rotate(16 22 36.3)', fill: '#8B5E3C' }));
      children.push(h('rect', { x: '12.5', y: '33', width: '27', height: '6.6', rx: '3.3', transform: 'rotate(-16 26 36.3)', fill: '#8B5E3C' }));
      children.push(h('path', { d: 'M24 9.5 C 28 15 30 19 30 23 C 30 27 27.5 29.5 24 29.5 C 20.5 29.5 18 27 18 23 C 18 20 19.5 17.5 21 15.5 C 21.5 18 22.5 19.5 24 20.5 C 24.5 16 23.5 12 24 9.5 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M24 19 C 26 22 27 24.5 27 26.5 C 27 28.5 25.7 29.5 24 29.5 C 22.3 29.5 21 28.5 21 26.5 C 21 24.5 22 22.5 24 19 Z', fill: '#E9C46A' }));
      children.push(h('circle', { cx: '12.5', cy: '22', r: '1.6', fill: '#E76F51', stroke: 'none' }));
      children.push(h('circle', { cx: '35.5', cy: '18', r: '1.6', fill: '#E76F51', stroke: 'none' }));
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

export default CampfireIcon;
