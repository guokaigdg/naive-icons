import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CreditCardIcon = defineComponent({
  name: 'CreditCardIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '5', y: '12', width: '38', height: '26', rx: '4', fill: '#2A9D8F' }));
      children.push(h('rect', { x: '5', y: '18', width: '38', height: '6', fill: '#264653' }));
      children.push(h('rect', { x: '11', y: '28', width: '9', height: '6', rx: '1.5', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M24 32.5 L 33 32.5', stroke: '#FFFFFF', 'stroke-width': sw(2.5) }));
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

export default CreditCardIcon;
