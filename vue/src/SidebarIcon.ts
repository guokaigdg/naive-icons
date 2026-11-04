import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SidebarIcon = defineComponent({
  name: 'SidebarIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '6', y: '11', width: '36', height: '26', rx: '4', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M20 11 L20 37', stroke: '#2A2A2A', 'stroke-width': sw(2.5) }));
      children.push(h('rect', { x: '9', y: '15', width: '8', height: '7', rx: '2', fill: '#264653', stroke: 'none' }));
      children.push(h('rect', { x: '9', y: '25', width: '8', height: '7', rx: '2', fill: '#2A9D8F', stroke: 'none' }));
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

export default SidebarIcon;
