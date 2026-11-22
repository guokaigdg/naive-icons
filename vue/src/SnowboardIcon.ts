import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SnowboardIcon = defineComponent({
  name: 'SnowboardIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M9 37 L37 31 C40 30 40 35 37 36 L9 42 C6 43 6 38 9 37 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M22 29 L17 34 M22 29 L29 32', stroke: '#FAEDCD', 'stroke-width': sw(5), fill: 'none' }));
      children.push(h('path', { d: 'M19 16 C16 21 18 25 22 29', stroke: '#264653', 'stroke-width': sw(8), fill: 'none' }));
      children.push(h('path', { d: 'M18 19 L11 22 M20 20 L28 16', stroke: '#264653', 'stroke-width': sw(4), fill: 'none' }));
      children.push(h('circle', { cx: '19', cy: '10', r: '4.8', fill: '#F4A6A4' }));
      children.push(h('path', { d: 'M15 10 H23', stroke: '#2A9D8F', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('circle', { cx: '28', cy: '16', r: '2.4', fill: '#2A9D8F', stroke: 'none' }));
      children.push(h('circle', { cx: '17', cy: '35', r: '2.6', fill: '#E76F51', stroke: 'none' }));
      children.push(h('circle', { cx: '29', cy: '33', r: '2.6', fill: '#E76F51', stroke: 'none' }));
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

export default SnowboardIcon;
