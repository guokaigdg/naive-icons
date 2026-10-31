import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const VideoIcon = defineComponent({
  name: 'VideoIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '4.8', y: '14.4', width: '26.88', height: '19.2', rx: '3.84', fill: '#264653' }));
      children.push(h('path', { d: 'M31.68 21.12 L 43.2 14.4 L 43.2 33.6 L 31.68 26.88 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M14.4 20.16 L 23.04 24 L 14.4 27.84 Z', fill: '#E9C46A' }));
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

export default VideoIcon;
