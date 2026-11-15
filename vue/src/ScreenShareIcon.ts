import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ScreenShareIcon = defineComponent({
  name: 'ScreenShareIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '5', y: '9', width: '38', height: '24', rx: '3', fill: '#264653' }));
      children.push(h('rect', { x: '8.5', y: '12.5', width: '31', height: '17', rx: '1.5', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('path', { d: 'M20 29 L20 17', stroke: '#E76F51', 'stroke-width': sw(3) }));
      children.push(h('path', { d: 'M15 22 L20 16 L25 22', stroke: '#E76F51', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M24 33 L24 41 M16 41 L32 41', stroke: '#2A2A2A', 'stroke-width': sw(3.5) }));
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

export default ScreenShareIcon;
