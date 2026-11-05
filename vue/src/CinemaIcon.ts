import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CinemaIcon = defineComponent({
  name: 'CinemaIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '6', y: '12', width: '36', height: '28', rx: '2', fill: '#264653' }));
      children.push(h('rect', { x: '12', y: '24', width: '24', height: '11', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('path', { d: 'M18 24 L18 35 M24 24 L24 35 M30 24 L30 35', stroke: '#264653', 'stroke-width': sw(1.8), fill: 'none' }));
      children.push(h('circle', { cx: '12', cy: '16', r: '1.5', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('circle', { cx: '24', cy: '16', r: '1.5', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('circle', { cx: '36', cy: '16', r: '1.5', fill: '#E9C46A', stroke: 'none' }));
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

export default CinemaIcon;
