import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ShareIcon = defineComponent({
  name: 'ShareIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '13', cy: '24', r: '5.5', fill: '#E76F51' }));
      children.push(h('circle', { cx: '33', cy: '11', r: '5.5', fill: '#2A9D8F' }));
      children.push(h('circle', { cx: '33', cy: '37', r: '5.5', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M17.5 21.5 L 28.5 14', stroke: '#2A2A2A', 'stroke-width': sw(2.5) }));
      children.push(h('path', { d: 'M17.5 26.5 L 28.5 34', stroke: '#2A2A2A', 'stroke-width': sw(2.5) }));
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

export default ShareIcon;
