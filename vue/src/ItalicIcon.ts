import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ItalicIcon = defineComponent({
  name: 'ItalicIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M22 11 L33 11', stroke: '#2A2A2A', 'stroke-width': sw(4.5), fill: 'none' }));
      children.push(h('path', { d: 'M31 11 L22 37', stroke: '#E76F51', 'stroke-width': sw(4.5), fill: 'none' }));
      children.push(h('path', { d: 'M20 37 L31 37', stroke: '#2A2A2A', 'stroke-width': sw(4.5), fill: 'none' }));
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

export default ItalicIcon;
