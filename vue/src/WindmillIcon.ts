import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const WindmillIcon = defineComponent({
  name: 'WindmillIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M19 41 L21.5 18 H26.5 L29 41 Z', fill: '#FAEDCD' }));
      children.push(h('rect', { x: '21.5', y: '32.5', width: '6', height: '8.5', fill: '#8B5E3C', 'stroke-width': sw(2.8) }));
      children.push(h('rect', { x: '22', y: '4.5', width: '4', height: '12.5', rx: '2', fill: '#E76F51', transform: 'rotate(45 24 17)' }));
      children.push(h('rect', { x: '22', y: '4.5', width: '4', height: '12.5', rx: '2', fill: '#E76F51', transform: 'rotate(135 24 17)' }));
      children.push(h('rect', { x: '22', y: '4.5', width: '4', height: '12.5', rx: '2', fill: '#E76F51', transform: 'rotate(225 24 17)' }));
      children.push(h('rect', { x: '22', y: '4.5', width: '4', height: '12.5', rx: '2', fill: '#E76F51', transform: 'rotate(315 24 17)' }));
      children.push(h('circle', { cx: '24', cy: '17', r: '2.6', fill: '#2A2A2A' }));
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

export default WindmillIcon;
