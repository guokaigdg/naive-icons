import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const HairDryerIcon = defineComponent({
  name: 'HairDryerIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M10 16 C10 12 13 10 16 10 H28 C34 10 38 15 38 21 C38 27 34 32 28 32 H16 C13 32 10 30 10 26 Z', fill: '#E76F51' }));
      children.push(h('rect', { x: '24', y: '30', width: '10', height: '12', rx: '2', fill: '#264653' }));
      children.push(h('path', { d: 'M8 18 V26', 'stroke-width': sw(3) }));
      children.push(h('path', { d: 'M12 18 V26', stroke: '#FAEDCD', 'stroke-width': sw(2) }));
      children.push(h('path', { d: 'M16 18 V26', stroke: '#FAEDCD', 'stroke-width': sw(2) }));
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

export default HairDryerIcon;
