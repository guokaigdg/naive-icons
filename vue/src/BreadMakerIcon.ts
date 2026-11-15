import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BreadMakerIcon = defineComponent({
  name: 'BreadMakerIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M16 10 C 16 5.5 32 5.5 32 10 Z', fill: '#E9C46A', 'stroke-width': sw(2) }));
      children.push(h('rect', { x: '8', y: '18', width: '32', height: '22', rx: '4', fill: '#264653' }));
      children.push(h('rect', { x: '10', y: '10', width: '28', height: '9', rx: '4', fill: '#FAEDCD' }));
      children.push(h('rect', { x: '12', y: '24', width: '14', height: '10', rx: '2', fill: '#FAEDCD' }));
      children.push(h('circle', { cx: '20.5', cy: '29', r: '2', fill: '#E76F51', stroke: 'none' }));
      children.push(h('path', { d: 'M28 26.5 H35 M28 30.5 H35', stroke: '#FAEDCD', 'stroke-width': sw(1.8), fill: 'none' }));
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

export default BreadMakerIcon;
