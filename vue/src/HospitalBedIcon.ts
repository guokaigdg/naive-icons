import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const HospitalBedIcon = defineComponent({
  name: 'HospitalBedIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '8', y: '13', width: '6', height: '25', rx: '2.5', fill: '#264653' }));
      children.push(h('path', { d: 'M11 19 L11 25 M8.5 22 L13.5 22', stroke: '#FAEDCD', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('rect', { x: '12', y: '26', width: '28', height: '8', rx: '3.5', fill: '#FAEDCD' }));
      children.push(h('rect', { x: '15', y: '21', width: '7', height: '6', rx: '2', fill: '#F4A6A4' }));
      children.push(h('rect', { x: '24', y: '25', width: '15', height: '7', rx: '2.5', fill: '#2A9D8F' }));
      children.push(h('path', { d: 'M15 34 L15 40 M37 34 L37 40', stroke: '#2A2A2A', 'stroke-width': sw(3), fill: 'none' }));
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

export default HospitalBedIcon;
