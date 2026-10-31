import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const SettingsIcon = defineComponent({
  name: 'SettingsIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M24 6 L27 11 L33 10 L34 16 L40 18 L37 23 L40 28 L34 30 L33 36 L27 35 L24 40 L21 35 L15 36 L14 30 L8 28 L11 23 L8 18 L14 16 L15 10 L21 11 Z', fill: '#264653' }));
      children.push(h('circle', { cx: '24', cy: '23', r: '6', fill: '#E9C46A' }));
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

export default SettingsIcon;
