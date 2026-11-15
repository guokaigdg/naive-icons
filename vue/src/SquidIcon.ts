import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SquidIcon = defineComponent({
  name: 'SquidIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M 24 4.81 C 30.4 10.81 33.4 17.01 33.4 22.61 C 33.4 26.61 29.6 29.01 24 29.01 C 18.4 29.01 14.6 26.61 14.6 22.61 C 14.6 17.01 17.6 10.81 24 4.81 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M 24 5.61 C 20.4 8.01 17.8 10.81 16.2 13.81 C 19.4 12.81 22 10.61 24 5.61 Z', fill: '#F4A6A4', stroke: 'none' }));
      children.push(h('path', { d: 'M 24 5.61 C 27.6 8.01 30.2 10.81 31.8 13.81 C 28.6 12.81 26 10.61 24 5.61 Z', fill: '#F4A6A4', stroke: 'none' }));
      children.push(h('path', { d: 'M 18.6 27.21 C 17.4 31.21 17.6 34.81 19 38.21 M 24 27.61 C 24 31.21 24.4 35.01 25.4 38.81 M 29.4 27.21 C 30.6 31.21 30.4 34.81 29 38.21', stroke: '#2A2A2A', 'stroke-width': sw(4.6), fill: 'none' }));
      children.push(h('path', { d: 'M 18.6 27.21 C 17.4 31.21 17.6 34.81 19 38.21 M 24 27.61 C 24 31.21 24.4 35.01 25.4 38.81 M 29.4 27.21 C 30.6 31.21 30.4 34.81 29 38.21', stroke: '#E76F51', 'stroke-width': sw(2.6), fill: 'none' }));
      children.push(h('path', { d: 'M 16.8 26.41 C 13.2 29.41 12 33.41 13.2 37.61 M 31.2 26.41 C 34.8 29.41 36 33.41 34.8 37.61', stroke: '#2A2A2A', 'stroke-width': sw(4.4), fill: 'none' }));
      children.push(h('path', { d: 'M 16.8 26.41 C 13.2 29.41 12 33.41 13.2 37.61 M 31.2 26.41 C 34.8 29.41 36 33.41 34.8 37.61', stroke: '#E76F51', 'stroke-width': sw(2.4), fill: 'none' }));
      children.push(h('circle', { cx: '18.8', cy: '22.61', r: '3.4', fill: '#FFFFFF', stroke: 'none' }));
      children.push(h('circle', { cx: '29.2', cy: '22.61', r: '3.4', fill: '#FFFFFF', stroke: 'none' }));
      children.push(h('circle', { cx: '18.8', cy: '22.81', r: '1.6', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('circle', { cx: '29.2', cy: '22.81', r: '1.6', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('path', { d: 'M 21.8 26.61 Q 24 28.21 26.2 26.61', stroke: '#2A2A2A', 'stroke-width': sw(1.6), fill: 'none' }));
      children.push(h('path', { d: 'M 20.6 11.81 C 18.6 15.81 17.6 20.01 17.8 24.01', stroke: '#FAEDCD', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('circle', { cx: '16.4', cy: '25.81', r: '1.2', fill: '#F4A6A4', stroke: 'none' }));
      children.push(h('circle', { cx: '31.6', cy: '25.81', r: '1.2', fill: '#F4A6A4', stroke: 'none' }));
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

export default SquidIcon;
