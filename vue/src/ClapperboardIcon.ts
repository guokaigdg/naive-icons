import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const ClapperboardIcon = defineComponent({
  name: 'ClapperboardIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M7 20 H41 V38 H7 Z', fill: '#264653' }));
      children.push(h('path', { d: 'M7 9 H41 V20 H7 Z', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M12 9 L18 20' }));
      children.push(h('path', { d: 'M21 9 L27 20' }));
      children.push(h('path', { d: 'M30 9 L36 20' }));
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

export default ClapperboardIcon;
