import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const PenguinIcon = defineComponent({
  name: 'PenguinIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('ellipse', { cx: '24', cy: '25.83', rx: '11.89', ry: '15.54', fill: '#264653' }));
      children.push(h('ellipse', { cx: '24', cy: '29.49', rx: '6.86', ry: '9.14', fill: '#FFFFFF' }));
      children.push(h('circle', { cx: '19.43', cy: '19.43', r: '2.29', fill: '#FFFFFF' }));
      children.push(h('circle', { cx: '28.57', cy: '19.43', r: '2.29', fill: '#FFFFFF' }));
      children.push(h('circle', { cx: '19.43', cy: '20.34', r: '1.19', fill: '#2A2A2A' }));
      children.push(h('circle', { cx: '28.57', cy: '20.34', r: '1.19', fill: '#2A2A2A' }));
      children.push(h('path', { d: 'M21.26 23.09 L26.74 23.09 L24 26.29 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M12.11 25.83 C 8.46 29.49 9.37 34.97 13.03 36.8', fill: 'none', stroke: '#2A2A2A' }));
      children.push(h('path', { d: 'M35.89 25.83 C 39.54 29.49 38.63 34.97 34.97 36.8', fill: 'none', stroke: '#2A2A2A' }));
      children.push(h('ellipse', { cx: '18.51', cy: '41.37', rx: '4.11', ry: '1.83', fill: '#E76F51' }));
      children.push(h('ellipse', { cx: '29.49', cy: '41.37', rx: '4.11', ry: '1.83', fill: '#E76F51' }));
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

export default PenguinIcon;
