import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FileCodeIcon = defineComponent({
  name: 'FileCodeIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M12 6 L12 42 L36 42 L36 18 L24 6 Z', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M24 6 L24 18 L36 18', fill: '#F4A6A4' }));
      children.push(h('path', { d: 'M20 24 L16 29 L20 34', stroke: '#2A9D8F', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M28 24 L32 29 L28 34', stroke: '#2A9D8F', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M26 22 L22 36', stroke: '#E76F51', 'stroke-width': sw(3), fill: 'none' }));
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

export default FileCodeIcon;
