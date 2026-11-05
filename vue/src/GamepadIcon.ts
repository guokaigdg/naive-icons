import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const GamepadIcon = defineComponent({
  name: 'GamepadIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M12 18 C8 18 6 24 7 30 L9 39 C10 42 14 42 15 39 L17 33 L31 33 L33 39 C34 42 38 42 39 39 L41 30 C42 24 40 18 36 18 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M14 24 L14 30 M11 27 L17 27', stroke: '#FAEDCD', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('circle', { cx: '32', cy: '24', r: '2', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '37', cy: '28', r: '2', fill: '#FAEDCD', stroke: 'none' }));
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

export default GamepadIcon;
