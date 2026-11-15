import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const GameConsoleIcon = defineComponent({
  name: 'GameConsoleIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '6', y: '17', width: '36', height: '20', rx: '5', fill: '#264653' }));
      children.push(h('path', { d: 'M11 26 H30', stroke: '#FAEDCD', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M11 21.5 H20', stroke: '#E76F51', 'stroke-width': sw(2.2), fill: 'none' }));
      children.push(h('circle', { cx: '36', cy: '21.5', r: '2', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('rect', { x: '30', y: '30', width: '4.5', height: '3', rx: '1', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('rect', { x: '36', y: '30', width: '4.5', height: '3', rx: '1', fill: '#FAEDCD', stroke: 'none' }));
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

export default GameConsoleIcon;
