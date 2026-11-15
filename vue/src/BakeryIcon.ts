import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BakeryIcon = defineComponent({
  name: 'BakeryIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '9', y: '19', width: '30', height: '22', rx: '2', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M6 12 H42 L38.5 20 H9.5 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M14 12.6 H18.5 L18 19.4 H14.2 Z', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('path', { d: 'M23 12.6 H27.5 L27 19.4 H23.2 Z', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('path', { d: 'M32 12.6 H36.5 L36 19.4 H32.2 Z', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('rect', { x: '12.5', y: '24', width: '10', height: '9', fill: '#264653' }));
      children.push(h('ellipse', { cx: '17.5', cy: '28.5', rx: '3.8', ry: '2.6', transform: 'rotate(-10 17.5 28.5)', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('path', { d: 'M14.8 27.2 L15.6 29.4 M18 26.9 L18.8 29.1', stroke: '#FAEDCD', 'stroke-width': sw(1.6), fill: 'none' }));
      children.push(h('rect', { x: '28', y: '26', width: '8', height: '15', fill: '#2A9D8F' }));
      children.push(h('circle', { cx: '30.5', cy: '34', r: '1.2', fill: '#FAEDCD', stroke: 'none' }));
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

export default BakeryIcon;
