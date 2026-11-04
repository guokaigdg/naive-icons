import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const DonutIcon = defineComponent({
  name: 'DonutIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '24', cy: '24', r: '15', fill: '#F4A6A4' }));
      children.push(h('circle', { cx: '24', cy: '24', r: '6', fill: '#FFFFFF' }));
      children.push(h('rect', { x: '16.5', y: '12.8', width: '5.6', height: '3.6', rx: '1.8', transform: 'rotate(25 19.3 14.6)', fill: '#E76F51', stroke: 'none' }));
      children.push(h('rect', { x: '25.6', y: '12.5', width: '5.6', height: '3.6', rx: '1.8', transform: 'rotate(-20 28.4 14.3)', fill: '#2A9D8F', stroke: 'none' }));
      children.push(h('rect', { x: '31.2', y: '18.2', width: '5.6', height: '3.6', rx: '1.8', transform: 'rotate(45 34 20)', fill: '#264653', stroke: 'none' }));
      children.push(h('rect', { x: '10.8', y: '21', width: '5.6', height: '3.6', rx: '1.8', transform: 'rotate(-35 13.6 22.8)', fill: '#588157', stroke: 'none' }));
      children.push(h('rect', { x: '29.1', y: '29.1', width: '5.6', height: '3.6', rx: '1.8', transform: 'rotate(15 31.9 30.9)', fill: '#2A9D8F', stroke: 'none' }));
      children.push(h('rect', { x: '15.7', y: '31', width: '5.6', height: '3.6', rx: '1.8', transform: 'rotate(60 18.5 32.8)', fill: '#264653', stroke: 'none' }));
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

export default DonutIcon;
