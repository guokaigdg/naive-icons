import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const NerdIcon = defineComponent({
  name: 'NerdIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '24', cy: '24', r: '16', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M11 20.5 H8.5 M37 20.5 H39.5', stroke: '#2A2A2A', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('circle', { cx: '17', cy: '20.5', r: '6', fill: '#FFFFFF' }));
      children.push(h('circle', { cx: '31', cy: '20.5', r: '6', fill: '#FFFFFF' }));
      children.push(h('path', { d: 'M23 20.5 H25', stroke: '#2A2A2A', fill: 'none' }));
      children.push(h('circle', { cx: '17', cy: '20.5', r: '1.8', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('circle', { cx: '31', cy: '20.5', r: '1.8', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('path', { d: 'M19 30 C 21.5 33 26.5 33 29 30', stroke: '#2A2A2A', 'stroke-width': sw(2.6), fill: 'none' }));
      children.push(h('rect', { x: '21.5', y: '30.5', width: '5', height: '4.5', rx: '1', fill: '#FFFFFF', 'stroke-width': sw(2) }));
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

export default NerdIcon;
