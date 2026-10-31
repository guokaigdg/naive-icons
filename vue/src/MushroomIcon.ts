import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MushroomIcon = defineComponent({
  name: 'MushroomIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M6 22 C 6 9 42 9 42 22 C 42 25 39 26 35 26 L 13 26 C 9 26 6 25 6 22 Z', fill: '#E76F51' }));
      children.push(h('circle', { cx: '15', cy: '18', r: '2.2', fill: '#FFFFFF' }));
      children.push(h('circle', { cx: '24', cy: '15', r: '2.6', fill: '#FFFFFF' }));
      children.push(h('circle', { cx: '33', cy: '18.5', r: '2.2', fill: '#FFFFFF' }));
      children.push(h('path', { d: 'M18 26 L 18 37 C 18 41 30 41 30 37 L 30 26 Z', fill: '#FAEDCD' }));
      children.push(h('circle', { cx: '22', cy: '31', r: '1.4', fill: '#2A2A2A' }));
      children.push(h('circle', { cx: '26', cy: '31', r: '1.4', fill: '#2A2A2A' }));
      children.push(h('path', { d: 'M22 34 Q 24 36 26 34', stroke: '#2A2A2A', fill: 'none', 'stroke-width': sw(1.8) }));
      children.push(h('path', { d: 'M10 42 L38 42', stroke: '#588157', 'stroke-width': sw(3) }));
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

export default MushroomIcon;
