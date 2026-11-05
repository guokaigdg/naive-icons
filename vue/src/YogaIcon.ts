import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const YogaIcon = defineComponent({
  name: 'YogaIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '24', cy: '9', r: '4', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M24 14 V26', 'stroke-width': sw(4) }));
      children.push(h('path', { d: 'M24 17 L15 23 M24 17 L33 23', 'stroke-width': sw(3) }));
      children.push(h('path', { d: 'M24 26 C17 26 12 29 10 34 C14 38 20 38 24 34 C28 38 34 38 38 34 C36 29 31 26 24 26 Z', fill: '#E76F51' }));
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

export default YogaIcon;
