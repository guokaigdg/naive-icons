import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BulldozerIcon = defineComponent({
  name: 'BulldozerIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '8', y: '32', width: '28', height: '9', rx: '4.5', fill: '#264653' }));
      children.push(h('circle', { cx: '14', cy: '36.5', r: '1.8', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '22', cy: '36.5', r: '1.8', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '30', cy: '36.5', r: '1.8', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('rect', { x: '12', y: '20', width: '17', height: '12', rx: '2', fill: '#E76F51' }));
      children.push(h('rect', { x: '22', y: '11', width: '9', height: '9', rx: '2', fill: '#FAEDCD' }));
      children.push(h('rect', { x: '24', y: '13', width: '5', height: '4.5', fill: '#264653', stroke: 'none' }));
      children.push(h('path', { d: 'M29 28 L34 29.5', stroke: '#2A2A2A', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M34 22 C 31.5 28 31.5 34 34 40 L41 40 L41 22 Z', fill: '#E9C46A' }));
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

export default BulldozerIcon;
