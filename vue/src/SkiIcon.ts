import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SkiIcon = defineComponent({
  name: 'SkiIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M8 34 L30 26 C34 24.5 36 28 33 30 L11 38.5 Z', fill: '#2A9D8F' }));
      children.push(h('path', { d: 'M14 38 L36 30 C40 28.5 42 32 39 34 L17 42.5 Z', fill: '#2A9D8F' }));
      children.push(h('path', { d: 'M24 23 L40 33', stroke: '#8B5E3C', 'stroke-width': sw(2.6), fill: 'none' }));
      children.push(h('path', { d: 'M26 24 L22 30 L18 33', stroke: '#264653', 'stroke-width': sw(6), fill: 'none' }));
      children.push(h('path', { d: 'M26 24 L30 30 L32 34', stroke: '#264653', 'stroke-width': sw(6), fill: 'none' }));
      children.push(h('path', { d: 'M17 14 C20 18 23 22 26 24', stroke: '#E76F51', 'stroke-width': sw(9), fill: 'none' }));
      children.push(h('path', { d: 'M19 17 L13 21', stroke: '#E76F51', 'stroke-width': sw(4), fill: 'none' }));
      children.push(h('path', { d: 'M22 20 L24 23', stroke: '#E76F51', 'stroke-width': sw(4), fill: 'none' }));
      children.push(h('circle', { cx: '16', cy: '10', r: '4.8', fill: '#264653' }));
      children.push(h('path', { d: 'M11 10 H19', stroke: '#2A9D8F', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('circle', { cx: '13', cy: '21', r: '2.3', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('circle', { cx: '24', cy: '23', r: '2.3', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('circle', { cx: '18', cy: '33', r: '2.5', fill: '#E9C46A' }));
      children.push(h('circle', { cx: '32', cy: '34', r: '2.5', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M13 21 L39 28', stroke: '#8B5E3C', 'stroke-width': sw(2.6), fill: 'none' }));
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

export default SkiIcon;
