import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const BarcodeIcon = defineComponent({
  name: 'BarcodeIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '6', y: '12', width: '3', height: '24', fill: '#264653', stroke: 'none' }));
      children.push(h('rect', { x: '11', y: '12', width: '2', height: '24', fill: '#264653', stroke: 'none' }));
      children.push(h('rect', { x: '15', y: '12', width: '4', height: '24', fill: '#264653', stroke: 'none' }));
      children.push(h('rect', { x: '21', y: '12', width: '2', height: '24', fill: '#264653', stroke: 'none' }));
      children.push(h('rect', { x: '25', y: '12', width: '3', height: '24', fill: '#264653', stroke: 'none' }));
      children.push(h('rect', { x: '30', y: '12', width: '2', height: '24', fill: '#264653', stroke: 'none' }));
      children.push(h('rect', { x: '34', y: '12', width: '4', height: '24', fill: '#264653', stroke: 'none' }));
      children.push(h('rect', { x: '40', y: '12', width: '2', height: '24', fill: '#264653', stroke: 'none' }));
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

export default BarcodeIcon;
