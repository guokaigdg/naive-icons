import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const KnifeIcon = defineComponent({
  name: 'KnifeIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(
        h('g', { transform: 'rotate(-32 24 24)' }, [
          h('rect', { x: '6', y: '20', width: '12', height: '8', rx: '4', fill: '#8B5E3C' }),
          h('path', { d: 'M16 18.5 L34 20 C 38 21 40 23 40.5 25.5 C 39.5 27.5 36.5 28.5 33 28.5 L16 28.5 Z', fill: '#FFFFFF', 'stroke-width': sw(3) }),
          h('path', { d: 'M16 18.5 L16 28.5', stroke: '#2A2A2A', 'stroke-width': sw(2) }),
          h('circle', { cx: '9.5', cy: '24', r: '1.2', fill: '#FAEDCD', stroke: 'none' }),
          h('circle', { cx: '12.5', cy: '24', r: '1.2', fill: '#FAEDCD', stroke: 'none' }),
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

export default KnifeIcon;
