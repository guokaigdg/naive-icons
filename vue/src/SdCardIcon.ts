import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const SdCardIcon = defineComponent({
  name: 'SdCardIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M14 7 L30 7 L38 15 L38 41 L14 41 Z', fill: '#264653' }));
      children.push(h('path', { d: 'M30 7 L30 15 L38 15', stroke: '#2A2A2A', fill: 'none' }));
      children.push(h('rect', { x: '19', y: '18', width: '4', height: '8', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('rect', { x: '25', y: '18', width: '4', height: '8', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('rect', { x: '31', y: '18', width: '4', height: '8', fill: '#FAEDCD', stroke: 'none' }));
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

export default SdCardIcon;
