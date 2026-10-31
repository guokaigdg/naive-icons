import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const TrainIcon = defineComponent({
  name: 'TrainIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '8.08', y: '18.38', width: '24.35', height: '14.05', rx: '2.81', fill: '#E76F51' }));
      children.push(h('rect', { x: '24.94', y: '9.95', width: '11.24', height: '12.18', rx: '1.87', fill: '#2A9D8F' }));
      children.push(h('rect', { x: '27.75', y: '12.76', width: '5.62', height: '4.68', fill: '#FAEDCD' }));
      children.push(h('rect', { x: '10.89', y: '10.89', width: '5.62', height: '7.49', fill: '#264653' }));
      children.push(h('circle', { cx: '13.7', cy: '7.14', r: '2.34', fill: '#FAEDCD' }));
      children.push(h('rect', { x: '6.2', y: '32.43', width: '33.72', height: '3.75', fill: '#264653' }));
      children.push(h('circle', { cx: '13.7', cy: '38.99', r: '3.75', fill: '#E9C46A' }));
      children.push(h('circle', { cx: '24', cy: '38.99', r: '3.75', fill: '#E9C46A' }));
      children.push(h('circle', { cx: '34.3', cy: '38.99', r: '3.75', fill: '#E9C46A' }));
      children.push(h('circle', { cx: '13.7', cy: '38.99', r: '1.4', fill: '#2A2A2A' }));
      children.push(h('circle', { cx: '24', cy: '38.99', r: '1.4', fill: '#2A2A2A' }));
      children.push(h('circle', { cx: '34.3', cy: '38.99', r: '1.4', fill: '#2A2A2A' }));
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

export default TrainIcon;
