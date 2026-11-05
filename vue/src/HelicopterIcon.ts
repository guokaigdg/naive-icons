import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const HelicopterIcon = defineComponent({
  name: 'HelicopterIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('ellipse', { cx: '22', cy: '28', rx: '12', ry: '8', fill: '#2A9D8F' }));
      children.push(h('path', { d: 'M32 28 L41 24 L41 32 Z', fill: '#2A9D8F' }));
      children.push(h('path', { d: 'M8 12 L40 12', stroke: '#2A2A2A', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M24 12 L24 20', stroke: '#2A2A2A', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('circle', { cx: '18', cy: '27', r: '2', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('path', { d: 'M14 36 L10 41 M30 36 L34 41 M12 41 L34 41', stroke: '#264653', 'stroke-width': sw(3), fill: 'none' }));
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

export default HelicopterIcon;
