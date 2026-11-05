import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SpiderIcon = defineComponent({
  name: 'SpiderIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '24', cy: '29', r: '8', fill: '#264653' }));
      children.push(h('circle', { cx: '24', cy: '18', r: '4.5', fill: '#264653' }));
      children.push(h('path', { d: 'M17 24 L9 18 M17 28 L8 27 M18 33 L10 38 M21 35 L17 41', stroke: '#2A2A2A', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('path', { d: 'M31 24 L39 18 M31 28 L40 27 M30 33 L38 38 M27 35 L31 41', stroke: '#2A2A2A', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('circle', { cx: '22', cy: '17', r: '1.3', fill: '#FFFFFF', stroke: 'none' }));
      children.push(h('circle', { cx: '26', cy: '17', r: '1.3', fill: '#FFFFFF', stroke: 'none' }));
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

export default SpiderIcon;
