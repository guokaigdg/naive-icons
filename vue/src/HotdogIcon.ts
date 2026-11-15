import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const HotdogIcon = defineComponent({
  name: 'HotdogIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '10', y: '27', width: '28', height: '10', rx: '5', fill: '#E9C46A' }));
      children.push(h('rect', { x: '9', y: '17.5', width: '30', height: '12', rx: '6', fill: '#E76F51' }));
      children.push(h('path', { d: 'M14 22 L17.5 25 L21 22 L24.5 25 L28 22 L31.5 25 L34 22.5', stroke: '#FAEDCD', 'stroke-width': sw(2.4), fill: 'none' }));
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

export default HotdogIcon;
