import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const DumbbellIcon = defineComponent({
  name: 'DumbbellIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '8', y: '15', width: '6.5', height: '18', rx: '2.5', fill: '#E76F51' }));
      children.push(h('rect', { x: '15.5', y: '19', width: '4', height: '10', rx: '2', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M19.5 24 L28.5 24', stroke: '#2A2A2A', 'stroke-width': sw(3.5) }));
      children.push(h('rect', { x: '28.5', y: '19', width: '4', height: '10', rx: '2', fill: '#E9C46A' }));
      children.push(h('rect', { x: '33.5', y: '15', width: '6.5', height: '18', rx: '2.5', fill: '#E76F51' }));
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

export default DumbbellIcon;
