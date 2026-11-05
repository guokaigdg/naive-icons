import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const LayoutDashboardIcon = defineComponent({
  name: 'LayoutDashboardIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '7', y: '7', width: '15', height: '15', rx: '3', fill: '#E76F51' }));
      children.push(h('rect', { x: '26', y: '7', width: '15', height: '10', rx: '3', fill: '#E9C46A' }));
      children.push(h('rect', { x: '7', y: '26', width: '15', height: '15', rx: '3', fill: '#2A9D8F' }));
      children.push(h('rect', { x: '26', y: '21', width: '15', height: '20', rx: '3', fill: '#264653' }));
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

export default LayoutDashboardIcon;
