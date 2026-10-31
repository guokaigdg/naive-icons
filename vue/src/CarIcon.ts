import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const CarIcon = defineComponent({
  name: 'CarIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M6 22 L13 22 L17 13 L31 13 L35 22 L42 22 L42 30 L6 30 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M18 21 L19.5 15.5 L28.5 15.5 L30 21 Z', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '15', cy: '32.5', r: '4.5', fill: '#264653' }));
      children.push(h('circle', { cx: '33', cy: '32.5', r: '4.5', fill: '#264653' }));
      children.push(h('circle', { cx: '15', cy: '32.5', r: '1.6', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '33', cy: '32.5', r: '1.6', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '38.5', cy: '26', r: '1.8', fill: '#E9C46A', stroke: 'none' }));
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

export default CarIcon;
