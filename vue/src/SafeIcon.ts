import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SafeIcon = defineComponent({
  name: 'SafeIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '7', y: '7', width: '34', height: '34', rx: '4', fill: '#264653' }));
      children.push(h('rect', { x: '12', y: '12', width: '24', height: '24', rx: '3', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '23', cy: '24', r: '6', fill: '#E76F51' }));
      children.push(h('path', { d: 'M23 18 L23 24 L27 28', stroke: '#2A2A2A', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('path', { d: 'M33 20 L38 20 M33 28 L38 28', stroke: '#E9C46A', 'stroke-width': sw(2.5), fill: 'none' }));
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

export default SafeIcon;
