import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const OrangeIcon = defineComponent({
  name: 'OrangeIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '24', cy: '26', r: '14', fill: '#E76F51' }));
      children.push(h('path', { d: 'M24 12 C 24 8 27 5.5 30.5 6', stroke: '#2A2A2A', 'stroke-width': sw(2.8) }));
      children.push(h('ellipse', { cx: '33.5', cy: '8.5', rx: '5.5', ry: '3', transform: 'rotate(-28 33.5 8.5)', fill: '#588157', 'stroke-width': sw(2) }));
      children.push(h('path', { d: 'M14 20 C 15.5 16 19 13.5 23 13', stroke: '#FAEDCD', 'stroke-width': sw(2.6), fill: 'none' }));
      children.push(h('circle', { cx: '24', cy: '39.5', r: '1.2', fill: '#2A2A2A', stroke: 'none' }));
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

export default OrangeIcon;
