import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const SunIcon = defineComponent({
  name: 'SunIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '24', cy: '24', r: '9.6', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M24 4.8 L24 10.56', stroke: '#2A2A2A' }));
      children.push(h('path', { d: 'M24 37.44 L24 43.2', stroke: '#2A2A2A' }));
      children.push(h('path', { d: 'M4.8 24 L10.56 24', stroke: '#2A2A2A' }));
      children.push(h('path', { d: 'M37.44 24 L43.2 24', stroke: '#2A2A2A' }));
      children.push(h('path', { d: 'M10.56 10.56 L14.4 14.4', stroke: '#2A2A2A' }));
      children.push(h('path', { d: 'M33.6 33.6 L37.44 37.44', stroke: '#2A2A2A' }));
      children.push(h('path', { d: 'M10.56 37.44 L14.4 33.6', stroke: '#2A2A2A' }));
      children.push(h('path', { d: 'M33.6 14.4 L37.44 10.56', stroke: '#2A2A2A' }));
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

export default SunIcon;
