import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const RainbowIcon = defineComponent({
  name: 'RainbowIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M8.82 32.93 A 15.18 15.18 0 0 1 39.18 32.93', stroke: '#E76F51', 'stroke-width': sw(4.5), fill: 'none' }));
      children.push(h('path', { d: 'M13.73 32.93 A 10.27 10.27 0 0 1 34.27 32.93', stroke: '#E9C46A', 'stroke-width': sw(4.5), fill: 'none' }));
      children.push(h('path', { d: 'M18.64 32.93 A 5.36 5.36 0 0 1 29.36 32.93', stroke: '#2A9D8F', 'stroke-width': sw(4.5), fill: 'none' }));
      children.push(h('circle', { cx: '7.93', cy: '35.61', r: '3.13', fill: '#FAEDCD' }));
      children.push(h('circle', { cx: '12.39', cy: '36.95', r: '2.68', fill: '#FAEDCD' }));
      children.push(h('circle', { cx: '40.07', cy: '35.61', r: '3.13', fill: '#FAEDCD' }));
      children.push(h('circle', { cx: '35.61', cy: '36.95', r: '2.68', fill: '#FAEDCD' }));
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

export default RainbowIcon;
