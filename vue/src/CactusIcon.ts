import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CactusIcon = defineComponent({
  name: 'CactusIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '20.11', y: '12.33', width: '7.78', height: '29.17', rx: '3.89', fill: '#588157' }));
      children.push(h('path', { d: 'M20.11 25.95 L 15.25 25.95 C 10.39 25.95 9.41 16.22 14.28 16.22 C 16.22 16.22 16.22 18.16 16.22 20.11 L 16.22 22.05 L 20.11 22.05 Z', fill: '#588157' }));
      children.push(h('path', { d: 'M27.89 31.78 L 32.75 31.78 C 37.61 31.78 38.59 22.05 33.73 22.05 C 31.78 22.05 31.78 24 31.78 25.95 L 31.78 27.89 L 27.89 27.89 Z', fill: '#588157' }));
      children.push(h('circle', { cx: '24', cy: '9.41', r: '1.94', fill: '#E9C46A' }));
      children.push(h('circle', { cx: '21.08', cy: '10.39', r: '2.43', fill: '#F4A6A4' }));
      children.push(h('circle', { cx: '26.92', cy: '10.39', r: '2.43', fill: '#F4A6A4' }));
      children.push(h('circle', { cx: '24', cy: '12.82', r: '2.43', fill: '#F4A6A4' }));
      children.push(h('circle', { cx: '23.03', cy: '20.11', r: '1.26', fill: '#2A2A2A' }));
      children.push(h('circle', { cx: '25.95', cy: '20.11', r: '1.26', fill: '#2A2A2A' }));
      children.push(h('path', { d: 'M23.03 23.03 Q 24.49 24.49 25.95 23.03', stroke: '#2A2A2A', fill: 'none', 'stroke-width': sw(1.5) }));
      children.push(h('path', { d: 'M14.28 43.45 L33.73 43.45', stroke: '#8B5E3C', 'stroke-width': sw(3) }));
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

export default CactusIcon;
