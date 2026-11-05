import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const CastleIcon = defineComponent({
  name: 'CastleIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M6 40 V16 H11 V12 H16 V16 H20 V12 H24 V16 H28 V12 H32 V16 H37 V12 H42 V16 V40 Z', fill: '#264653' }));
      children.push(h('rect', { x: '20', y: '28', width: '8', height: '12', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('rect', { x: '12', y: '23', width: '4', height: '5', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('rect', { x: '32', y: '23', width: '4', height: '5', fill: '#E9C46A', stroke: 'none' }));
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

export default CastleIcon;
