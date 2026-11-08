import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const EarbudsIcon = defineComponent({
  name: 'EarbudsIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M12 16 C12 12 18 12 18 16 C18 19 16 20 16 23 L16 27 C14 27 13 26 13 23 Z', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M36 16 C36 12 30 12 30 16 C30 19 32 20 32 23 L32 27 C34 27 35 26 35 23 Z', fill: '#FAEDCD' }));
      children.push(h('rect', { x: '17', y: '31', width: '14', height: '9', rx: '4', fill: '#2A9D8F' }));
      children.push(h('path', { d: 'M17 34 L31 34', stroke: '#FAEDCD', 'stroke-width': sw(2), fill: 'none' }));
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

export default EarbudsIcon;
