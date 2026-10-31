import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const CameraIcon = defineComponent({
  name: 'CameraIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '6', y: '16', width: '36', height: '24', rx: '3', fill: '#264653' }));
      children.push(h('path', { d: 'M18 16 L20 10 L28 10 L30 16', fill: '#264653' }));
      children.push(h('circle', { cx: '24', cy: '28', r: '8', fill: '#FAEDCD' }));
      children.push(h('circle', { cx: '24', cy: '28', r: '4', fill: '#E76F51' }));
      children.push(h('rect', { x: '34', y: '19', width: '4', height: '3', fill: '#E9C46A' }));
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

export default CameraIcon;
