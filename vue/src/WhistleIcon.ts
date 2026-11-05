import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const WhistleIcon = defineComponent({
  name: 'WhistleIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M11 15 L29 15 C36 15 40 19 40 25 C40 32 36 36 29 36 L11 36 Z', fill: '#2A9D8F' }));
      children.push(h('rect', { x: '6', y: '20', width: '9', height: '10', rx: '2', fill: '#264653' }));
      children.push(h('circle', { cx: '32', cy: '21', r: '2.5', fill: '#FFFFFF', stroke: 'none' }));
      children.push(h('path', { d: 'M38 12 C42 12 42 18 39 18', stroke: '#2A2A2A', 'stroke-width': sw(2.5), fill: 'none' }));
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

export default WhistleIcon;
