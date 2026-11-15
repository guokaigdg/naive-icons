import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const TelescopeIcon = defineComponent({
  name: 'TelescopeIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M9 25.5 L33 13', stroke: '#2A2A2A', 'stroke-width': sw(10), fill: 'none' }));
      children.push(h('path', { d: 'M9 25.5 L33 13', stroke: '#264653', 'stroke-width': sw(5.5), fill: 'none' }));
      children.push(h('circle', { cx: '34.5', cy: '12', r: '5', fill: '#2A9D8F', 'stroke-width': sw(3) }));
      children.push(h('circle', { cx: '7.5', cy: '26.5', r: '3.2', fill: '#E9C46A', 'stroke-width': sw(2.6) }));
      children.push(h('path', { d: 'M22 19 L12 42 M22 19 L32 42 M22 19 V30', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M8 43 H38', 'stroke-width': sw(2.6), fill: 'none' }));
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

export default TelescopeIcon;
