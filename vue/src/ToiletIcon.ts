import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const ToiletIcon = defineComponent({
  name: 'ToiletIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '16', y: '6', width: '16', height: '10', rx: '2', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M12 18 H36 C36 26 34 30 32 33 C30 37 27 40 24 40 C21 40 18 37 16 33 C14 30 12 26 12 18 Z', fill: '#FFFFFF' }));
      children.push(h('ellipse', { cx: '24', cy: '18', rx: '9', ry: '2.5', fill: '#264653', stroke: 'none' }));
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

export default ToiletIcon;
