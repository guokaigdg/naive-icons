import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const QrCodeIcon = defineComponent({
  name: 'QrCodeIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '6', y: '6', width: '14', height: '14', rx: '3', fill: '#264653' }));
      children.push(h('rect', { x: '28', y: '6', width: '14', height: '14', rx: '3', fill: '#264653' }));
      children.push(h('rect', { x: '6', y: '28', width: '14', height: '14', rx: '3', fill: '#264653' }));
      children.push(h('rect', { x: '10', y: '10', width: '6', height: '6', rx: '1.5', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('rect', { x: '32', y: '10', width: '6', height: '6', rx: '1.5', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('rect', { x: '10', y: '32', width: '6', height: '6', rx: '1.5', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('rect', { x: '28', y: '28', width: '7', height: '7', rx: '2', fill: '#2A9D8F', stroke: 'none' }));
      children.push(h('rect', { x: '38', y: '28', width: '4', height: '4', rx: '1.2', fill: '#2A9D8F', stroke: 'none' }));
      children.push(h('rect', { x: '28', y: '38', width: '4', height: '4', rx: '1.2', fill: '#2A9D8F', stroke: 'none' }));
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

export default QrCodeIcon;
