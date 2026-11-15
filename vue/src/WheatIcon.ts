import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const WheatIcon = defineComponent({
  name: 'WheatIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '21', y: '14', width: '6', height: '28', rx: '3', fill: '#588157' }));
      children.push(h('path', { d: 'M23 34 C 18 31 13 31.5 10 34.5 C 14 37.5 19.5 37 23 35 Z', fill: '#588157' }));
      children.push(h('path', { d: 'M25 27 C 30 24 35 24.5 38 27.5 C 34 30.5 28.5 30 25 28 Z', fill: '#2A9D8F' }));
      children.push(h('ellipse', { cx: '24', cy: '8.5', rx: '3.4', ry: '4.6', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('ellipse', { cx: '19.6', cy: '13.5', rx: '3.4', ry: '2.2', transform: 'rotate(32 19.6 13.5)', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('ellipse', { cx: '28.4', cy: '13.5', rx: '3.4', ry: '2.2', transform: 'rotate(-32 28.4 13.5)', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('ellipse', { cx: '19.6', cy: '19.5', rx: '3.4', ry: '2.2', transform: 'rotate(32 19.6 19.5)', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('ellipse', { cx: '28.4', cy: '19.5', rx: '3.4', ry: '2.2', transform: 'rotate(-32 28.4 19.5)', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('ellipse', { cx: '20.2', cy: '25.5', rx: '3.2', ry: '2.1', transform: 'rotate(32 20.2 25.5)', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('ellipse', { cx: '27.8', cy: '25.5', rx: '3.2', ry: '2.1', transform: 'rotate(-32 27.8 25.5)', fill: '#E9C46A', stroke: 'none' }));
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

export default WheatIcon;
