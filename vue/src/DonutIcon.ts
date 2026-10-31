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
      children.push(h('rect', { x: '17', y: '13', width: '4.5', height: '1.8', rx: '0.9', transform: 'rotate(25 19 14)', fill: '#E9C46A' }));
      children.push(h('rect', { x: '27', y: '12', width: '4.5', height: '1.8', rx: '0.9', transform: 'rotate(-20 29 13)', fill: '#2A9D8F' }));
      children.push(h('rect', { x: '32', y: '19', width: '4.5', height: '1.8', rx: '0.9', transform: 'rotate(45 34 20)', fill: '#264653' }));
      children.push(h('rect', { x: '13', y: '22', width: '4.5', height: '1.8', rx: '0.9', transform: 'rotate(-35 15 23)', fill: '#E9C46A' }));
      children.push(h('rect', { x: '30', y: '30', width: '4.5', height: '1.8', rx: '0.9', transform: 'rotate(15 32 31)', fill: '#2A9D8F' }));
      children.push(h('rect', { x: '17', y: '31', width: '4.5', height: '1.8', rx: '0.9', transform: 'rotate(60 19 32)', fill: '#264653' }));
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
