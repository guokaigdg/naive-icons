import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SunflowerIcon = defineComponent({
  name: 'SunflowerIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '24', cy: '23', r: '7.5', fill: '#8B5E3C' }));
      children.push(h('ellipse', { cx: '36.00', cy: '23.00', rx: '3.4', ry: '5.6', transform: 'rotate(90 36.00 23.00)', fill: '#E9C46A', 'stroke-width': sw(2.4) }));
      children.push(h('ellipse', { cx: '33.71', cy: '30.05', rx: '3.4', ry: '5.6', transform: 'rotate(126 33.71 30.05)', fill: '#E9C46A', 'stroke-width': sw(2.4) }));
      children.push(h('ellipse', { cx: '27.71', cy: '34.41', rx: '3.4', ry: '5.6', transform: 'rotate(162 27.71 34.41)', fill: '#E9C46A', 'stroke-width': sw(2.4) }));
      children.push(h('ellipse', { cx: '20.29', cy: '34.41', rx: '3.4', ry: '5.6', transform: 'rotate(198 20.29 34.41)', fill: '#E9C46A', 'stroke-width': sw(2.4) }));
      children.push(h('ellipse', { cx: '14.29', cy: '30.05', rx: '3.4', ry: '5.6', transform: 'rotate(234 14.29 30.05)', fill: '#E9C46A', 'stroke-width': sw(2.4) }));
      children.push(h('ellipse', { cx: '12.00', cy: '23.00', rx: '3.4', ry: '5.6', transform: 'rotate(270 12.00 23.00)', fill: '#E9C46A', 'stroke-width': sw(2.4) }));
      children.push(h('ellipse', { cx: '14.29', cy: '15.95', rx: '3.4', ry: '5.6', transform: 'rotate(306 14.29 15.95)', fill: '#E9C46A', 'stroke-width': sw(2.4) }));
      children.push(h('ellipse', { cx: '20.29', cy: '11.59', rx: '3.4', ry: '5.6', transform: 'rotate(342 20.29 11.59)', fill: '#E9C46A', 'stroke-width': sw(2.4) }));
      children.push(h('ellipse', { cx: '27.71', cy: '11.59', rx: '3.4', ry: '5.6', transform: 'rotate(378 27.71 11.59)', fill: '#E9C46A', 'stroke-width': sw(2.4) }));
      children.push(h('ellipse', { cx: '33.71', cy: '15.95', rx: '3.4', ry: '5.6', transform: 'rotate(414 33.71 15.95)', fill: '#E9C46A', 'stroke-width': sw(2.4) }));
      children.push(h('circle', { cx: '24', cy: '23', r: '1.2', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '20.8', cy: '20.4', r: '1.2', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '27.2', cy: '20.4', r: '1.2', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '20.8', cy: '25.6', r: '1.2', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '27.2', cy: '25.6', r: '1.2', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '24', cy: '26.6', r: '1.2', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '24', cy: '19.4', r: '1.2', fill: '#FAEDCD', stroke: 'none' }));
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

export default SunflowerIcon;
