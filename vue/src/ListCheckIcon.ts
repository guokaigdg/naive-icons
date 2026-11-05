import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ListCheckIcon = defineComponent({
  name: 'ListCheckIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M8 12 L11 15 L16 9', 'stroke-width': sw(2.5) }));
      children.push(h('path', { d: 'M22 12 H39' }));
      children.push(h('path', { d: 'M8 24 L11 27 L16 21', 'stroke-width': sw(2.5) }));
      children.push(h('path', { d: 'M22 24 H39' }));
      children.push(h('path', { d: 'M8 36 L11 39 L16 33', 'stroke-width': sw(2.5) }));
      children.push(h('path', { d: 'M22 36 H39' }));
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

export default ListCheckIcon;
