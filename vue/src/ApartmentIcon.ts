import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ApartmentIcon = defineComponent({
  name: 'ApartmentIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '9', y: '8', width: '30', height: '33', rx: '2', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M9 16 L39 16 M9 25 L39 25 M9 34 L39 34', stroke: '#264653', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('rect', { x: '13', y: '11', width: '6', height: '4', fill: '#2A9D8F', stroke: 'none' }));
      children.push(h('rect', { x: '22', y: '11', width: '6', height: '4', fill: '#2A9D8F', stroke: 'none' }));
      children.push(h('rect', { x: '31', y: '11', width: '5', height: '4', fill: '#2A9D8F', stroke: 'none' }));
      children.push(h('rect', { x: '13', y: '20', width: '6', height: '4', fill: '#2A9D8F', stroke: 'none' }));
      children.push(h('rect', { x: '22', y: '20', width: '6', height: '4', fill: '#2A9D8F', stroke: 'none' }));
      children.push(h('rect', { x: '31', y: '20', width: '5', height: '4', fill: '#2A9D8F', stroke: 'none' }));
      children.push(h('path', { d: 'M9 41 L39 41', stroke: '#264653', 'stroke-width': sw(2.5), fill: 'none' }));
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

export default ApartmentIcon;
