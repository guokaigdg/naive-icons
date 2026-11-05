import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const WebcamIcon = defineComponent({
  name: 'WebcamIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '24', cy: '20', r: '11', fill: '#264653' }));
      children.push(h('circle', { cx: '24', cy: '20', r: '5', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '24', cy: '20', r: '2', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('path', { d: 'M24 31 L24 38 M10 38 L38 38', stroke: '#2A2A2A', fill: 'none' }));
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

export default WebcamIcon;
