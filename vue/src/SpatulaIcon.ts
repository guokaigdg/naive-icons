import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SpatulaIcon = defineComponent({
  name: 'SpatulaIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(
        h('g', { transform: 'rotate(-24 24 26)' }, [
          h('rect', { x: '5.5', y: '22', width: '16', height: '6.5', rx: '3.25', fill: '#8B5E3C' }),
          h('path', { d: 'M19 15 L35 15 C 37.5 15 39 17 39 19.5 L39 31 C 39 33 37.5 34 35.5 34 L19 34 Z', fill: '#FFFFFF' }),
          h('path', { d: 'M22.5 20 L22.5 29 M27.5 20 L27.5 29 M32.5 20 L32.5 29', stroke: '#2A2A2A', 'stroke-width': sw(2) }),
        ]),
      );
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

export default SpatulaIcon;
