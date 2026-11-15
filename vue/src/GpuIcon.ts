import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const GpuIcon = defineComponent({
  name: 'GpuIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '5', y: '14', width: '5.5', height: '24', rx: '2.5', fill: '#E9C46A' }));
      children.push(h('rect', { x: '9', y: '15.5', width: '34', height: '19', rx: '2', fill: '#264653' }));
      children.push(h('circle', { cx: '18.5', cy: '25', r: '6.8', fill: '#FAEDCD' }));
      children.push(h('circle', { cx: '18.5', cy: '25', r: '2.2', fill: '#264653', stroke: 'none' }));
      children.push(h('path', { d: 'M18.5 25 V19.3 M18.5 25 L23.4 27.8 M18.5 25 L13.6 27.8', stroke: '#264653', 'stroke-width': sw(1.5), fill: 'none' }));
      children.push(h('path', { d: 'M27.5 19 V31 M31.5 19 V31 M35.5 19 V31 M39.5 19 V31', stroke: '#FAEDCD', 'stroke-width': sw(1.6), fill: 'none' }));
      children.push(h('rect', { x: '11', y: '34.5', width: '26', height: '4', rx: '1.5', fill: '#E9C46A', 'stroke-width': sw(2) }));
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

export default GpuIcon;
