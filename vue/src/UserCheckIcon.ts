import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const UserCheckIcon = defineComponent({
  name: 'UserCheckIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '19', cy: '15', r: '8', fill: '#E76F51' }));
      children.push(h('path', { d: 'M5 42 C 5 33 11 29 19 29 C 24 29 28 31 30 34 L 30 42 Z', fill: '#2A9D8F' }));
      children.push(h('circle', { cx: '34', cy: '33', r: '9', fill: '#588157' }));
      children.push(h('path', { d: 'M30 33 L33 36 L38 30', stroke: '#FFFFFF', 'stroke-width': sw(2.8), fill: 'none' }));
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

export default UserCheckIcon;
