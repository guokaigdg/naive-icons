import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FryingPanIcon = defineComponent({
  name: 'FryingPanIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M7 24.4 C 7 18 12.4 15.6 19 15.6 C 25.6 15.6 31 18 31 24.4 C 31 32 25.8 37.6 19 37.6 C 12.2 37.6 7 32 7 24.4 Z', fill: '#264653' }));
      children.push(h('ellipse', { cx: '19', cy: '23.2', rx: '11', ry: '4.2', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('ellipse', { cx: '19', cy: '24.2', rx: '7.4', ry: '3.8', fill: '#FFFFFF', stroke: 'none' }));
      children.push(h('circle', { cx: '19', cy: '23.8', r: '2.6', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('path', { d: 'M30.6 22 H 39.8', stroke: '#2A2A2A', 'stroke-width': sw(4.4), fill: 'none' }));
      children.push(h('path', { d: 'M35.2 22 H 40', stroke: '#8B5E3C', 'stroke-width': sw(3), fill: 'none' }));
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

export default FryingPanIcon;
