import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const PoliceStationIcon = defineComponent({
  name: 'PoliceStationIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M5 17 L24 6 L43 17 Z', fill: '#E76F51' }));
      children.push(h('rect', { x: '7', y: '17', width: '34', height: '23', fill: '#264653' }));
      children.push(h('circle', { cx: '24', cy: '28', r: '4', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M24 25 L25 28 L28 28 L26 30 L27 33 L24 31 L21 33 L22 30 L20 28 L23 28 Z', fill: '#264653', stroke: 'none' }));
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

export default PoliceStationIcon;
