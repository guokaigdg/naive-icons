import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const WatermelonIcon = defineComponent({
  name: 'WatermelonIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M5 14.5 A19 19 0 0 0 43 14.5 Z', fill: '#588157', stroke: 'none' }));
      children.push(h('path', { d: 'M10 14.5 A14 14 0 0 0 38 14.5 Z', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('path', { d: 'M13.5 14.5 A10.5 10.5 0 0 0 34.5 14.5 Z', fill: '#E76F51', stroke: 'none' }));
      children.push(h('path', { d: 'M5 14.5 A19 19 0 0 0 43 14.5 Z', fill: 'none' }));
      children.push(h('path', { d: 'M10 14.5 A14 14 0 0 0 38 14.5', fill: 'none', 'stroke-width': sw(2.2) }));
      children.push(h('path', { d: 'M13.5 14.5 A10.5 10.5 0 0 0 34.5 14.5', fill: 'none', 'stroke-width': sw(2.2) }));
      children.push(h('circle', { cx: '19', cy: '18.5', r: '1.05', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('circle', { cx: '24', cy: '18.5', r: '1.05', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('circle', { cx: '29', cy: '18.5', r: '1.05', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('circle', { cx: '21', cy: '22', r: '1.05', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('circle', { cx: '27', cy: '22', r: '1.05', fill: '#2A2A2A', stroke: 'none' }));
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

export default WatermelonIcon;
