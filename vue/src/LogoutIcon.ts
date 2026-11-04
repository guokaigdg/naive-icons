import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const LogoutIcon = defineComponent({
  name: 'LogoutIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '6', y: '8', width: '14', height: '32', rx: '3', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M18 24 L38 24', stroke: '#E76F51', 'stroke-width': sw(5), fill: 'none' }));
      children.push(h('path', { d: 'M30 16 L38 24 L30 32', stroke: '#E76F51', 'stroke-width': sw(5), fill: 'none' }));
      children.push(h('circle', { cx: '13', cy: '24', r: '1.7', fill: '#2A2A2A', stroke: 'none' }));
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

export default LogoutIcon;
