import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FolderMinusIcon = defineComponent({
  name: 'FolderMinusIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M7 16 L7 38 L36 38 L36 18 L22 18 L18 12 L7 12 Z', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M7 18 L36 18', stroke: '#2A2A2A', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('path', { d: 'M34 31 L42 31', stroke: '#E76F51', 'stroke-width': sw(4.5), fill: 'none' }));
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

export default FolderMinusIcon;
