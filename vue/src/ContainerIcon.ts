import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ContainerIcon = defineComponent({
  name: 'ContainerIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '7', y: '13', width: '34', height: '22', rx: '3', fill: '#2A9D8F' }));
      children.push(h('path', { d: 'M7 20 H41 M7 28 H41', 'stroke-width': sw(2.2), fill: 'none' }));
      children.push(h('rect', { x: '11', y: '15.5', width: '6', height: '2.5', rx: '1', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('rect', { x: '11', y: '23.5', width: '6', height: '2.5', rx: '1', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('path', { d: 'M13 35 V40 M35 35 V40', 'stroke-width': sw(2.6), fill: 'none' }));
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

export default ContainerIcon;
