import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ElephantIcon = defineComponent({
  name: 'ElephantIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '24', cy: '21', r: '10', fill: '#264653' }));
      children.push(h('path', { d: 'M15 18 C8 16 6 24 12 28 C14 26 15 22 15 18 Z', fill: '#2A9D8F' }));
      children.push(h('path', { d: 'M33 18 C40 16 42 24 36 28 C34 26 33 22 33 18 Z', fill: '#2A9D8F' }));
      children.push(h('path', { d: 'M24 30 C24 36 22 40 28 41 C31 41 32 39 32 37', stroke: '#264653', 'stroke-width': sw(5), fill: 'none' }));
      children.push(h('circle', { cx: '20', cy: '21', r: '1.4', fill: '#FFFFFF', stroke: 'none' }));
      children.push(h('circle', { cx: '28', cy: '21', r: '1.4', fill: '#FFFFFF', stroke: 'none' }));
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

export default ElephantIcon;
