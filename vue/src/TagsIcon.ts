import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const TagsIcon = defineComponent({
  name: 'TagsIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M31 5 L43 5 L43 17 L28 32 L16 20 Z', fill: '#264653' }));
      children.push(h('circle', { cx: '38', cy: '9', r: '2', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('path', { d: 'M22 12 L34 12 L34 24 L19 39 L8 28 Z', fill: '#F4A6A4' }));
      children.push(h('circle', { cx: '29', cy: '17', r: '2', fill: '#FAEDCD', stroke: 'none' }));
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

export default TagsIcon;
