import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const SpeakerIcon = defineComponent({
  name: 'SpeakerIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '12', y: '6', width: '24', height: '36', rx: '4', fill: '#264653' }));
      children.push(h('circle', { cx: '24', cy: '15', r: '4', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('circle', { cx: '24', cy: '29', r: '8', fill: '#FAEDCD' }));
      children.push(h('circle', { cx: '24', cy: '29', r: '3', fill: '#264653', stroke: 'none' }));
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

export default SpeakerIcon;
