import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FilePdfIcon = defineComponent({
  name: 'FilePdfIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M12 6 L12 42 L36 42 L36 18 L24 6 Z', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M24 6 L24 18 L36 18', fill: '#F4A6A4' }));
      children.push(h('rect', { x: '16', y: '23', width: '16', height: '13', rx: '2', fill: '#E76F51', stroke: 'none' }));
      children.push(h('path', { d: 'M20 33 L20 25.5 L25 25.5 C28.2 25.5 28.2 30 25 30 L20 30', fill: 'none', stroke: '#FAEDCD', 'stroke-width': sw(2.5) }));
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

export default FilePdfIcon;
