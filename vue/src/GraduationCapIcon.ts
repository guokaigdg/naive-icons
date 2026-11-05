import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const GraduationCapIcon = defineComponent({
  name: 'GraduationCapIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M24 8 L42 16 L24 24 L6 16 Z', fill: '#264653' }));
      children.push(h('path', { d: 'M13 20 V30 C13 34 19 37 24 37 C29 37 35 34 35 30 V20', fill: '#264653' }));
      children.push(h('path', { d: 'M41 16 V27', stroke: '#E9C46A', 'stroke-width': sw(3) }));
      children.push(h('circle', { cx: '41', cy: '30', r: '3', fill: '#E9C46A', stroke: 'none' }));
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

export default GraduationCapIcon;
