import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MoneyMouthIcon = defineComponent({
  name: 'MoneyMouthIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '24', cy: '24', r: '15', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M17 15 C14 15 14 19 17 19 C20 19 20 22 17 22 M17 13 V24', stroke: '#264653', 'stroke-width': sw(1.5), fill: 'none' }));
      children.push(h('path', { d: 'M31 15 C28 15 28 19 31 19 C34 19 34 22 31 22 M31 13 V24', stroke: '#264653', 'stroke-width': sw(1.5), fill: 'none' }));
      children.push(h('rect', { x: '16', y: '29', width: '16', height: '7', rx: '1', fill: '#2A9D8F' }));
      children.push(h('circle', { cx: '24', cy: '32.5', r: '2', fill: '#FAEDCD', stroke: 'none' }));
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

export default MoneyMouthIcon;
