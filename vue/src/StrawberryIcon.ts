import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const StrawberryIcon = defineComponent({
  name: 'StrawberryIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M24 18 C 15.5 18 11.5 24 14.5 30 C 17 34.5 20.5 38 24 39 C 27.5 38 31 34.5 33.5 30 C 36.5 24 32.5 18 24 18 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M16 17.5 L17.5 11 L21 15.5 L24 9.5 L27 15.5 L30.5 11 L32 17.5 Z', fill: '#588157' }));
      children.push(h('circle', { cx: '19', cy: '23.5', r: '1.3', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('circle', { cx: '24', cy: '25.5', r: '1.3', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('circle', { cx: '29', cy: '23.5', r: '1.3', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('circle', { cx: '21.5', cy: '30', r: '1.3', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('circle', { cx: '26.5', cy: '30', r: '1.3', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('circle', { cx: '24', cy: '34', r: '1.3', fill: '#2A2A2A', stroke: 'none' }));
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

export default StrawberryIcon;
