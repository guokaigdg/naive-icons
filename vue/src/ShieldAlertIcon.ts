import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ShieldAlertIcon = defineComponent({
  name: 'ShieldAlertIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M24 7 C28 10 33 11 37 11 L37 22 C37 31 31 37 24 41 C17 37 11 31 11 22 L11 11 C15 11 20 10 24 7 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M24 16 L24 27', stroke: '#FAEDCD', 'stroke-width': sw(4), fill: 'none' }));
      children.push(h('circle', { cx: '24', cy: '33.5', r: '2.2', fill: '#FAEDCD', stroke: 'none' }));
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

export default ShieldAlertIcon;
