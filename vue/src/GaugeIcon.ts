import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const GaugeIcon = defineComponent({
  name: 'GaugeIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M7 34 A 17 17 0 0 1 41 34', fill: 'none', stroke: '#2A2A2A', 'stroke-width': sw(4) }));
      children.push(h('path', { d: 'M11 34 L8 34 M14.8 24.8 L12.7 22.7 M24 21 L24 18 M33.2 24.8 L35.3 22.7 M37 34 L40 34', stroke: '#2A2A2A', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('path', { d: 'M24 34 L32 26', stroke: '#E76F51', 'stroke-width': sw(4) }));
      children.push(h('circle', { cx: '24', cy: '34', r: '3.5', fill: '#264653' }));
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

export default GaugeIcon;
