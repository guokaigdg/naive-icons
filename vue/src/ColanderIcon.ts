import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ColanderIcon = defineComponent({
  name: 'ColanderIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M10 22 C 10 34 16 40 24 40 C 32 40 38 34 38 22 Z', fill: '#2A9D8F' }));
      children.push(h('path', { d: 'M9 22 L39 22', stroke: '#2A2A2A', 'stroke-width': sw(3.5) }));
      children.push(h('path', { d: 'M9 23 C 5.5 23 5.5 27 8.5 27.5', stroke: '#2A2A2A', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M39 23 C 42.5 23 42.5 27 39.5 27.5', stroke: '#2A2A2A', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('circle', { cx: '17', cy: '27', r: '1.5', fill: '#FFFFFF', stroke: 'none' }));
      children.push(h('circle', { cx: '24', cy: '26', r: '1.5', fill: '#FFFFFF', stroke: 'none' }));
      children.push(h('circle', { cx: '31', cy: '27', r: '1.5', fill: '#FFFFFF', stroke: 'none' }));
      children.push(h('circle', { cx: '20', cy: '33', r: '1.5', fill: '#FFFFFF', stroke: 'none' }));
      children.push(h('circle', { cx: '28', cy: '33', r: '1.5', fill: '#FFFFFF', stroke: 'none' }));
      children.push(h('circle', { cx: '24', cy: '36.5', r: '1.5', fill: '#FFFFFF', stroke: 'none' }));
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

export default ColanderIcon;
