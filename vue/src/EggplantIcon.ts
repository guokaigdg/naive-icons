import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const EggplantIcon = defineComponent({
  name: 'EggplantIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M22 14 C 17 17 13 21 12.5 27 C 12 34 17 39 24 39 C 31 39 36 34 35.5 27 C 35 21 31 17 26 14 Z', fill: '#264653' }));
      children.push(h('path', { d: 'M27 14 C 28.5 10 31 7.5 34 7', stroke: '#588157', 'stroke-width': sw(3) }));
      children.push(h('path', { d: 'M22 13 C 25 11.5 28.5 11.5 31.5 13.5 C 29 15.5 27 19 26 22 C 24.5 18.5 23.5 15.5 22 13 Z', fill: '#588157' }));
      children.push(h('path', { d: 'M17 26 C 19 22 23 20 27 20', stroke: '#2A9D8F', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('circle', { cx: '20', cy: '31', r: '1.3', fill: '#FAEDCD', stroke: 'none' }));
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

export default EggplantIcon;
