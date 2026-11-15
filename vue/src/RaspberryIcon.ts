import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const RaspberryIcon = defineComponent({
  name: 'RaspberryIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M14 27 C 14 18 18 13 24 13 C 30 13 34 18 34 27 C 34 34 30 38 24 38 C 18 38 14 34 14 27 Z', fill: '#F4A6A4' }));
      children.push(h('ellipse', { cx: '19.5', cy: '11.5', rx: '4.4', ry: '2.6', transform: 'rotate(30 19.5 11.5)', fill: '#588157', 'stroke-width': sw(2) }));
      children.push(h('ellipse', { cx: '28.5', cy: '11.5', rx: '4.4', ry: '2.6', transform: 'rotate(-30 28.5 11.5)', fill: '#588157', 'stroke-width': sw(2) }));
      children.push(h('path', { d: 'M24 13 L24 8', stroke: '#588157', 'stroke-width': sw(2.6) }));
      children.push(h('circle', { cx: '19', cy: '22', r: '1.6', fill: '#E76F51', stroke: 'none' }));
      children.push(h('circle', { cx: '24', cy: '20.5', r: '1.6', fill: '#E76F51', stroke: 'none' }));
      children.push(h('circle', { cx: '29', cy: '22', r: '1.6', fill: '#E76F51', stroke: 'none' }));
      children.push(h('circle', { cx: '17.5', cy: '28.5', r: '1.6', fill: '#E76F51', stroke: 'none' }));
      children.push(h('circle', { cx: '23', cy: '27', r: '1.6', fill: '#E76F51', stroke: 'none' }));
      children.push(h('circle', { cx: '30.5', cy: '28.5', r: '1.6', fill: '#E76F51', stroke: 'none' }));
      children.push(h('circle', { cx: '20', cy: '34', r: '1.6', fill: '#E76F51', stroke: 'none' }));
      children.push(h('circle', { cx: '28', cy: '34', r: '1.6', fill: '#E76F51', stroke: 'none' }));
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

export default RaspberryIcon;
