import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SatelliteIcon = defineComponent({
  name: 'SatelliteIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '18', y: '18', width: '12', height: '12', rx: '2', fill: '#264653' }));
      children.push(h('rect', { x: '6', y: '22', width: '10', height: '4', fill: '#2A9D8F' }));
      children.push(h('rect', { x: '32', y: '22', width: '10', height: '4', fill: '#2A9D8F' }));
      children.push(h('path', { d: 'M24 18 L24 12', stroke: '#264653', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('path', { d: 'M20 8 C22 6 26 6 28 8', stroke: '#E76F51', 'stroke-width': sw(2), fill: 'none' }));
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

export default SatelliteIcon;
