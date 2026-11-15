import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FlagCheckIcon = defineComponent({
  name: 'FlagCheckIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M14 7.5 L14 41', stroke: '#2A2A2A', 'stroke-width': sw(3.5), fill: 'none' }));
      children.push(h('path', { d: 'M14 10 C 20.5 6.4 27 13.5 33.5 10 L33.5 22.5 C 27 26 20.5 18.9 14 22.5 Z', fill: '#588157' }));
      children.push(h('path', { d: 'M19 15.4 L22.2 18.6 L28.6 12.2', stroke: '#FFFFFF', 'stroke-width': sw(3.2), fill: 'none' }));
      children.push(h('circle', { cx: '14', cy: '7.5', r: '2.2', fill: '#E9C46A', stroke: 'none' }));
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

export default FlagCheckIcon;
