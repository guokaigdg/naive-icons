import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const WalkerIcon = defineComponent({
  name: 'WalkerIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M14 12 V34 C14 38 18 40 22 40 H30 C34 40 34 38 34 34 V12', fill: 'none' }));
      children.push(h('path', { d: 'M14 20 H9 M34 20 H39', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('circle', { cx: '14', cy: '41', r: '3', fill: '#264653', stroke: 'none' }));
      children.push(h('circle', { cx: '34', cy: '41', r: '3', fill: '#264653', stroke: 'none' }));
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

export default WalkerIcon;
