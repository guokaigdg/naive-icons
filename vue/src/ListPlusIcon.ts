import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const ListPlusIcon = defineComponent({
  name: 'ListPlusIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M22 14 H39' }));
      children.push(h('path', { d: 'M22 26 H39' }));
      children.push(h('path', { d: 'M22 38 H39' }));
      children.push(h('path', { d: 'M11 7 V15' }));
      children.push(h('path', { d: 'M7 11 H15' }));
      children.push(h('circle', { cx: '11', cy: '26', r: '2', fill: '#264653', stroke: 'none' }));
      children.push(h('circle', { cx: '11', cy: '38', r: '2', fill: '#264653', stroke: 'none' }));
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

export default ListPlusIcon;
