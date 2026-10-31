import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SearchIcon = defineComponent({
  name: 'SearchIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M29 29 L39.5 39.5', stroke: '#264653', 'stroke-width': sw(5.5) }));
      children.push(h('circle', { cx: '19', cy: '19', r: '13.5', fill: '#2A9D8F' }));
      children.push(h('circle', { cx: '19', cy: '19', r: '8.5', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '19', cy: '19', r: '4.5', fill: '#2A9D8F', stroke: 'none' }));
      children.push(h('circle', { cx: '15.5', cy: '15.5', r: '2.3', fill: '#FFFFFF', stroke: 'none' }));
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

export default SearchIcon;
