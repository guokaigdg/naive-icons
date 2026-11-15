import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CrayonIcon = defineComponent({
  name: 'CrayonIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(
        h('g', { transform: 'rotate(-45 24 24)' }, [
          h('rect', { x: '7', y: '18.5', width: '24', height: '11', rx: '1', fill: '#E76F51' }),
          h('rect', { x: '12', y: '18.5', width: '9', height: '11', fill: '#FAEDCD', stroke: 'none' }),
          h('path', { d: 'M12 18.5 L12 29.5 M21 18.5 L21 29.5', stroke: '#2A2A2A', 'stroke-width': sw(2) }),
          h('path', { d: 'M31 18.5 L40 24 L31 29.5 Z', fill: '#F4A6A4' }),
        ]),
      );
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

export default CrayonIcon;
