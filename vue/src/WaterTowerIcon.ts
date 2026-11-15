import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const WaterTowerIcon = defineComponent({
  name: 'WaterTowerIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M11 14 L24 5.2 L37 14 Z', fill: '#E76F51' }));
      children.push(h('rect', { x: '13', y: '14', width: '22', height: '10', fill: '#2A9D8F' }));
      children.push(h('path', { d: 'M13 24 H35 L31.5 29 H16.5 Z', fill: '#2A9D8F' }));
      children.push(h('path', { d: 'M17.5 29 L13.5 41 M30.5 29 L34.5 41', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M17 31.5 L34 40 M31 31.5 L14 40', 'stroke-width': sw(2.2), fill: 'none' }));
      children.push(h('rect', { x: '14.2', y: '17', width: '19.6', height: '2.8', fill: '#FAEDCD', stroke: 'none' }));
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

export default WaterTowerIcon;
