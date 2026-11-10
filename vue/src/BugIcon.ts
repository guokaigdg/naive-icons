import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BugIcon = defineComponent({
  name: 'BugIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M 24 17 C 31 17 35 23 35 29 C 35 37 30 41 24 41 C 18 41 13 37 13 29 C 13 23 17 17 24 17 Z', fill: '#2A9D8F' }));
      children.push(h('circle', { cx: '24', cy: '13', r: '4', fill: '#264653' }));
      children.push(h('path', { d: 'M 24 17 L 24 41', stroke: '#2A2A2A', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('path', { d: 'M 15 25 L 8 22 M 14 31 L 7 30 M 15 36 L 9 40', stroke: '#2A2A2A', 'stroke-width': sw(2.2), fill: 'none' }));
      children.push(h('path', { d: 'M 33 25 L 40 22 M 34 31 L 41 30 M 33 36 L 39 40', stroke: '#2A2A2A', 'stroke-width': sw(2.2), fill: 'none' }));
      children.push(h('path', { d: 'M 21 10 C 19 7 17 6 15 6 M 27 10 C 29 7 31 6 33 6', stroke: '#2A2A2A', 'stroke-width': sw(2.2), fill: 'none' }));
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

export default BugIcon;
