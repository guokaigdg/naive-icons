import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SickIcon = defineComponent({
  name: 'SickIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '24', cy: '24', r: '16', fill: '#588157' }));
      children.push(h('path', { d: 'M15 19.5 C 17 22 19 22 21 19.5', stroke: '#2A2A2A', 'stroke-width': sw(2.4), fill: 'none' }));
      children.push(h('path', { d: 'M27 19.5 C 29 22 31 22 33 19.5', stroke: '#2A2A2A', 'stroke-width': sw(2.4), fill: 'none' }));
      children.push(h('path', { d: 'M18 31.5 C 20.5 29 22.5 34 24 31.5 C 25.5 29 27.5 34 30 31.5', stroke: '#2A2A2A', 'stroke-width': sw(2.4), fill: 'none' }));
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

export default SickIcon;
