import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const DizzyIcon = defineComponent({
  name: 'DizzyIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '24', cy: '24', r: '16', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M22.5 20.5 C 22.5 18 20.5 16.2 18 16.2 C 15 16.2 13.5 18.5 13.5 21 C 13.5 24 15.8 25.5 18.3 25 C 20.3 24.6 21 22.8 20 21.8', stroke: '#2A2A2A', 'stroke-width': sw(2.2), fill: 'none' }));
      children.push(h('path', { d: 'M34.5 20.5 C 34.5 18 32.5 16.2 30 16.2 C 27 16.2 25.5 18.5 25.5 21 C 25.5 24 27.8 25.5 30.3 25 C 32.3 24.6 33 22.8 32 21.8', stroke: '#2A2A2A', 'stroke-width': sw(2.2), fill: 'none' }));
      children.push(h('path', { d: 'M16.5 32 C 19 29.5 21.5 34.5 24 32 C 26.5 29.5 29 34.5 31.5 32', stroke: '#2A2A2A', 'stroke-width': sw(2.6), fill: 'none' }));
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

export default DizzyIcon;
