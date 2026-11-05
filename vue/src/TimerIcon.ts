import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const TimerIcon = defineComponent({
  name: 'TimerIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '24', cy: '26', r: '14', fill: '#E9C46A' }));
      children.push(h('rect', { x: '19', y: '6', width: '10', height: '6', rx: '2', fill: '#E76F51' }));
      children.push(h('path', { d: 'M24 26 L24 18', stroke: '#FFFFFF', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M24 26 L30 30', stroke: '#FFFFFF', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M17 26 L19 26 M29 26 L31 26', stroke: '#8B5E3C', 'stroke-width': sw(2), fill: 'none' }));
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

export default TimerIcon;
