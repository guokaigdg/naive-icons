import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const VrHeadsetIcon = defineComponent({
  name: 'VrHeadsetIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M7 16 H41 V26 C41 32 37 34 33 34 C29 34 27 30 24 30 C21 30 19 34 15 34 C11 34 7 32 7 26 Z', fill: '#264653' }));
      children.push(h('rect', { x: '13', y: '20', width: '9', height: '5', rx: '2', fill: '#2A9D8F', stroke: 'none' }));
      children.push(h('rect', { x: '26', y: '20', width: '9', height: '5', rx: '2', fill: '#2A9D8F', stroke: 'none' }));
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

export default VrHeadsetIcon;
