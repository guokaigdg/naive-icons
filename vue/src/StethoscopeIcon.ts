import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const StethoscopeIcon = defineComponent({
  name: 'StethoscopeIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M14 8 C 12 18 15 26 21 29 C 26 31 30 30 31 26', stroke: '#2A9D8F', 'stroke-width': sw(4), fill: 'none' }));
      children.push(h('path', { d: 'M33 8 C 35 15 34 21 30 24', stroke: '#2A9D8F', 'stroke-width': sw(4), fill: 'none' }));
      children.push(h('circle', { cx: '14', cy: '8', r: '2.5', fill: '#2A9D8F', stroke: 'none' }));
      children.push(h('circle', { cx: '33', cy: '8', r: '2.5', fill: '#2A9D8F', stroke: 'none' }));
      children.push(h('circle', { cx: '33', cy: '31', r: '6', fill: '#E76F51' }));
      children.push(h('circle', { cx: '33', cy: '31', r: '2', fill: '#FAEDCD', stroke: 'none' }));
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

export default StethoscopeIcon;
