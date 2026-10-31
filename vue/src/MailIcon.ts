import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const MailIcon = defineComponent({
  name: 'MailIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '6', y: '12', width: '36', height: '24', rx: '3', fill: '#F4A6A4' }));
      children.push(h('path', { d: 'M6 14 L24 28 L42 14', stroke: '#2A2A2A' }));
      children.push(h('circle', { cx: '20', cy: '22', r: '1.5', fill: '#2A2A2A' }));
      children.push(h('circle', { cx: '28', cy: '22', r: '1.5', fill: '#2A2A2A' }));
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

export default MailIcon;
