import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SnowGlobeIcon = defineComponent({
  name: 'SnowGlobeIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '24', cy: '20', r: '15', fill: '#FFFFFF' }));
      children.push(h('path', { d: 'M10.5 27.5 C 15 31 33 31 37.5 27.5', stroke: '#264653', 'stroke-width': sw(2.2), fill: 'none' }));
      children.push(h('rect', { x: '20', y: '19', width: '9', height: '9', fill: '#E76F51' }));
      children.push(h('path', { d: 'M18 19 L24.5 13.5 L31 19 Z', fill: '#264653' }));
      children.push(h('circle', { cx: '16', cy: '13', r: '1.4', fill: '#2A9D8F', stroke: 'none' }));
      children.push(h('circle', { cx: '32', cy: '15.5', r: '1.4', fill: '#2A9D8F', stroke: 'none' }));
      children.push(h('circle', { cx: '30', cy: '24', r: '1.4', fill: '#2A9D8F', stroke: 'none' }));
      children.push(h('circle', { cx: '15', cy: '21', r: '1.4', fill: '#2A9D8F', stroke: 'none' }));
      children.push(h('rect', { x: '12', y: '33', width: '24', height: '9', rx: '3', fill: '#8B5E3C' }));
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

export default SnowGlobeIcon;
