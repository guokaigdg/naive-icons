import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const VanIcon = defineComponent({
  name: 'VanIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M6 18 L24 18 L34 26 L41 26 L41 34 L6 34 Z', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M24 18 L24 26 L34 26', stroke: '#264653', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('circle', { cx: '14', cy: '36', r: '4', fill: '#264653' }));
      children.push(h('circle', { cx: '34', cy: '36', r: '4', fill: '#264653' }));
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

export default VanIcon;
