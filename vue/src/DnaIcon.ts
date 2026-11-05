import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const DnaIcon = defineComponent({
  name: 'DnaIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M14 6 C30 14 18 24 34 34 C40 38 36 42 30 42', stroke: '#2A9D8F', 'stroke-width': sw(3.5), fill: 'none' }));
      children.push(h('path', { d: 'M34 6 C18 14 30 24 14 34 C8 38 12 42 18 42', stroke: '#E76F51', 'stroke-width': sw(3.5), fill: 'none' }));
      children.push(h('path', { d: 'M16 12 L32 12 M16 20 L32 20 M16 28 L32 28 M16 36 L32 36', stroke: '#2A2A2A', 'stroke-width': sw(2.5), fill: 'none' }));
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

export default DnaIcon;
