import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const AmbulanceIcon = defineComponent({
  name: 'AmbulanceIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '6', y: '16', width: '24', height: '20', rx: '3', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M30 20 L38 20 L42 26 L42 36 L30 36 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M15 22 L21 22 L21 26 L25 26 L25 32 L21 32 L21 36 L15 36 L15 32 L11 32 L11 26 L15 26 Z', fill: '#E76F51', stroke: 'none' }));
      children.push(h('circle', { cx: '14', cy: '37', r: '4', fill: '#264653' }));
      children.push(h('circle', { cx: '34', cy: '37', r: '4', fill: '#264653' }));
      children.push(h('circle', { cx: '14', cy: '37', r: '1.3', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '34', cy: '37', r: '1.3', fill: '#FAEDCD', stroke: 'none' }));
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

export default AmbulanceIcon;
