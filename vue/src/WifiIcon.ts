import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const WifiIcon = defineComponent({
  name: 'WifiIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M9 21 A 19 19 0 0 1 39 21', stroke: '#2A9D8F', 'stroke-width': sw(4), fill: 'none' }));
      children.push(h('path', { d: 'M15 28 A 11.5 11.5 0 0 1 33 28', stroke: '#E76F51', 'stroke-width': sw(4), fill: 'none' }));
      children.push(h('circle', { cx: '24', cy: '35', r: '4', fill: '#E9C46A' }));
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

export default WifiIcon;
