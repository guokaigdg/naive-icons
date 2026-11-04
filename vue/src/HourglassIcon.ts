import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const HourglassIcon = defineComponent({
  name: 'HourglassIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M12 8 L36 8 L25 24 L36 40 L12 40 L23 24 Z', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M16.5 12 L31.5 12 L25 22 Z', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('path', { d: 'M17 36 L31 36 L25 28 Z', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('path', { d: 'M11 8 L37 8', stroke: '#2A2A2A', 'stroke-width': sw(3.5), fill: 'none' }));
      children.push(h('path', { d: 'M11 40 L37 40', stroke: '#2A2A2A', 'stroke-width': sw(3.5), fill: 'none' }));
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

export default HourglassIcon;
