import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const VaccineVialIcon = defineComponent({
  name: 'VaccineVialIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '17', y: '12', width: '14', height: '26', rx: '3', fill: '#FAEDCD' }));
      children.push(h('rect', { x: '19', y: '24', width: '10', height: '12', rx: '1.5', fill: '#2A9D8F', stroke: 'none' }));
      children.push(h('rect', { x: '15', y: '5', width: '18', height: '8', rx: '2', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M19 16 H29', stroke: '#264653', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('path', { d: 'M26 20 H29 M26 22.5 H29', stroke: '#264653', 'stroke-width': sw(1.5), fill: 'none' }));
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

export default VaccineVialIcon;
