import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const AirFryerIcon = defineComponent({
  name: 'AirFryerIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '12', y: '8', width: '24', height: '34', rx: '6', fill: '#264653' }));
      children.push(h('rect', { x: '17', y: '14', width: '14', height: '9', rx: '2', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('rect', { x: '16', y: '28', width: '16', height: '10', rx: '2', fill: '#E76F51' }));
      children.push(h('path', { d: 'M21 33 H27', stroke: '#FAEDCD', 'stroke-width': sw(2) }));
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

export default AirFryerIcon;
