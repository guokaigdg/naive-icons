import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const PlayingCardsIcon = defineComponent({
  name: 'PlayingCardsIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '8', y: '13', width: '21', height: '27', rx: '4', fill: '#264653' }));
      children.push(h('rect', { x: '18', y: '10', width: '21', height: '28', rx: '4', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M31 24 C31 24 30 23 28.5 23 C27 23 26.5 25 27.5 26.5 C28.5 28 31 30 31 30 L34.5 26.5 C36 25 35 23 33.5 23 C32 23 31 24 31 24 Z', fill: '#E76F51', stroke: 'none' }));
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

export default PlayingCardsIcon;
