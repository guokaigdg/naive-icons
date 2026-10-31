import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const GoogleChromeIcon = defineComponent({
  name: 'GoogleChromeIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M24 24 L40.63 14.4 A19.2 19.2 0 0 0 7.37 14.4 Z', fill: '#E76F51', stroke: 'none' }));
      children.push(h('path', { d: 'M24 24 L40.63 14.4 A19.2 19.2 0 0 1 24 43.2 Z', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('path', { d: 'M24 24 L24 43.2 A19.2 19.2 0 0 1 7.37 14.4 Z', fill: '#588157', stroke: 'none' }));
      children.push(h('circle', { cx: '24', cy: '24', r: '8.45', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '24', cy: '24', r: '6.53', fill: '#4A8FD4' }));
      children.push(h('circle', { cx: '24', cy: '24', r: '19.2', fill: 'none' }));
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

export default GoogleChromeIcon;
