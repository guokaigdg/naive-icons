import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BootIcon = defineComponent({
  name: 'BootIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M16 8 L29 8 L29 27 C29 31 33 32 38 32 C41 32 42 34 42 38 C42 41 39 42 35 42 L14 42 C11 42 10 40 11 37 L13 21 C13 16 14 13 16 12 Z', fill: '#8B5E3C' }));
      children.push(h('path', { d: 'M11 38 C20 38 32 38 42 38', stroke: '#2A2A2A', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('path', { d: 'M18 15 L27 19', stroke: '#FAEDCD', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('path', { d: 'M18 21 L27 25', stroke: '#FAEDCD', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('path', { d: 'M16 11 L29 11', stroke: '#FAEDCD', 'stroke-width': sw(1.8), fill: 'none' }));
      children.push(h('path', { d: 'M33 33 C36 37 39 39 41 39', stroke: '#FAEDCD', 'stroke-width': sw(1.5), fill: 'none' }));
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

export default BootIcon;
