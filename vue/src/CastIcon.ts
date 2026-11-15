import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CastIcon = defineComponent({
  name: 'CastIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '24', y: '8', width: '18', height: '13', rx: '2', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M8 34 A 6 6 0 0 1 14 40', stroke: '#2A9D8F', 'stroke-width': sw(3.5), fill: 'none' }));
      children.push(h('path', { d: 'M8 27 A 13 13 0 0 1 21 40', stroke: '#2A9D8F', 'stroke-width': sw(3.5), fill: 'none' }));
      children.push(h('path', { d: 'M8 20 A 20 20 0 0 1 28 40', stroke: '#2A9D8F', 'stroke-width': sw(3.5), fill: 'none' }));
      children.push(h('circle', { cx: '8', cy: '40', r: '2.2', fill: '#2A9D8F', stroke: 'none' }));
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

export default CastIcon;
