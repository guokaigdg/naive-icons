import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const StickyNoteIcon = defineComponent({
  name: 'StickyNoteIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M7 7 L41 7 L41 34 L34 41 L7 41 Z', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M41 34 L34 34 L34 41 Z', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('path', { d: 'M13 15 L33 15 M13 23 L29 23 M13 31 L24 31', stroke: '#8B5E3C', 'stroke-width': sw(2.5), fill: 'none' }));
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

export default StickyNoteIcon;
