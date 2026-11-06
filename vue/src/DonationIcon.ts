import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const DonationIcon = defineComponent({
  name: 'DonationIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M12 22 L36 22 L36 39 C36 41 34 42 32 42 L16 42 C14 42 12 41 12 39 Z', fill: '#FAEDCD' }));
      children.push(h('rect', { x: '10', y: '17', width: '28', height: '6', rx: '2', fill: '#2A9D8F' }));
      children.push(h('path', { d: 'M24 18 C24 18 22 16 20.5 17 C19 18 19 21 21 23 L24 25 L27 23 C29 21 29 18 27.5 17 C26 16 24 18 24 18 Z', fill: '#E76F51', stroke: 'none' }));
      children.push(h('path', { d: 'M18 31 L30 31', stroke: '#2A2A2A', 'stroke-width': sw(2.5), fill: 'none' }));
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

export default DonationIcon;
