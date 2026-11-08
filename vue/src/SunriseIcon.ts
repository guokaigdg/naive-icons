import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SunriseIcon = defineComponent({
  name: 'SunriseIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M7 33 L41 33', stroke: '#264653', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('path', { d: 'M13 33 C13 26 18 22 24 22 C30 22 35 26 35 33 Z', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M24 12 L24 16 M10 18 L13.5 21 M38 18 L34.5 21', stroke: '#E76F51', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('path', { d: 'M14 39 C18 37 21 41 25 39 C29 37 32 41 36 39', stroke: '#2A9D8F', 'stroke-width': sw(2.5), fill: 'none' }));
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

export default SunriseIcon;
