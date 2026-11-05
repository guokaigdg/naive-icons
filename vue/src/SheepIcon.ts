import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SheepIcon = defineComponent({
  name: 'SheepIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M9 30 C 7 24 11 19 16 19 C 16 12 22 10 25 14 C 30 10 38 13 37 20 C 41 21 42 27 39 32 L12 32 Z', fill: '#FAEDCD' }));
      children.push(h('ellipse', { cx: '36', cy: '25', rx: '6', ry: '7.5', fill: '#264653' }));
      children.push(h('circle', { cx: '34', cy: '24', r: '1.3', fill: '#FFFFFF', stroke: 'none' }));
      children.push(h('circle', { cx: '38', cy: '24', r: '1.3', fill: '#FFFFFF', stroke: 'none' }));
      children.push(h('path', { d: 'M17 34 L17 40 M27 34 L27 40', stroke: '#264653', 'stroke-width': sw(4), fill: 'none' }));
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

export default SheepIcon;
