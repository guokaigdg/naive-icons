import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CloudSunIcon = defineComponent({
  name: 'CloudSunIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '33.5', cy: '15', r: '7.5', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M33.5 6.2 L33.5 4.8', stroke: '#2A2A2A', 'stroke-width': sw(2.8) }));
      children.push(h('path', { d: 'M27.9 8.2 L27 7.2', stroke: '#2A2A2A', 'stroke-width': sw(2.8) }));
      children.push(h('path', { d: 'M39.1 8.2 L40 7.2', stroke: '#2A2A2A', 'stroke-width': sw(2.8) }));
      children.push(h('path', { d: 'M9.3 36 C 5.2 36 5.2 28.5 10.6 27.5 C 11.1 22.5 17.3 20 21 23.5 C 23.8 18.8 31.8 21.2 30.8 27 C 35.3 27.5 35.3 36 30.6 36 Z', fill: '#FAEDCD' }));
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

export default CloudSunIcon;
