import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const RiceCookerIcon = defineComponent({
  name: 'RiceCookerIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M8 16 C8 10 40 10 40 16', stroke: '#264653', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('rect', { x: '8', y: '17', width: '32', height: '24', rx: '6', fill: '#FFFFFF' }));
      children.push(h('path', { d: 'M8 22 L40 22', stroke: '#264653', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('path', { d: 'M15 32 L26 32', stroke: '#2A9D8F', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('circle', { cx: '33', cy: '32', r: '2.5', fill: '#E76F51', stroke: 'none' }));
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

export default RiceCookerIcon;
