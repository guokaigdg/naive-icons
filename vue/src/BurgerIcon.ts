import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const BurgerIcon = defineComponent({
  name: 'BurgerIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M8 20 C8 13 16 9 24 9 C32 9 40 13 40 20 Z', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M9 22 L39 22 L38 26 L10 26 Z', fill: '#588157' }));
      children.push(h('rect', { x: '10', y: '26', width: '28', height: '6', rx: '2', fill: '#E76F51', stroke: 'none' }));
      children.push(h('rect', { x: '9', y: '32', width: '30', height: '6', rx: '3', fill: '#E9C46A' }));
      children.push(h('circle', { cx: '18', cy: '15', r: '1', fill: '#FFFFFF', stroke: 'none' }));
      children.push(h('circle', { cx: '24', cy: '13', r: '1', fill: '#FFFFFF', stroke: 'none' }));
      children.push(h('circle', { cx: '30', cy: '15', r: '1', fill: '#FFFFFF', stroke: 'none' }));
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

export default BurgerIcon;
