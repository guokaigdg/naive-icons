import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const OvenIcon = defineComponent({
  name: 'OvenIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '7', y: '7', width: '34', height: '34', rx: '3', fill: '#264653' }));
      children.push(h('rect', { x: '12', y: '17', width: '24', height: '18', rx: '2', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('path', { d: 'M16 22 L32 22', stroke: '#264653', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('circle', { cx: '13', cy: '12', r: '2', fill: '#E76F51', stroke: 'none' }));
      children.push(h('circle', { cx: '20', cy: '12', r: '2', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('path', { d: 'M26 12 L38 12', stroke: '#E9C46A', 'stroke-width': sw(2), fill: 'none' }));
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

export default OvenIcon;
