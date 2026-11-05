import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PliersIcon = defineComponent({
  name: 'PliersIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M16 6 C12 10 12 14 16 17 L22 21', stroke: '#264653', 'stroke-width': sw(4), fill: 'none' }));
      children.push(h('path', { d: 'M32 6 C36 10 36 14 32 17 L26 21', stroke: '#E76F51', 'stroke-width': sw(4), fill: 'none' }));
      children.push(h('circle', { cx: '24', cy: '22', r: '3', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('path', { d: 'M22 25 L16 42', stroke: '#264653', 'stroke-width': sw(4), fill: 'none' }));
      children.push(h('path', { d: 'M26 25 L32 42', stroke: '#E76F51', 'stroke-width': sw(4), fill: 'none' }));
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

export default PliersIcon;
