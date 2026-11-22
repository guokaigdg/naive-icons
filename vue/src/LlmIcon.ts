import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const LlmIcon = defineComponent({
  name: 'LlmIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '11', cy: '14', r: '4', fill: '#2A9D8F' }));
      children.push(h('circle', { cx: '11', cy: '34', r: '4', fill: '#2A9D8F' }));
      children.push(h('circle', { cx: '24', cy: '24', r: '5', fill: '#E9C46A' }));
      children.push(h('circle', { cx: '37', cy: '14', r: '4', fill: '#E76F51' }));
      children.push(h('circle', { cx: '37', cy: '34', r: '4', fill: '#E76F51' }));
      children.push(h('path', { d: 'M15 16 L20 22 M15 32 L20 26 M28 22 L33 16 M28 26 L33 32', 'stroke-width': sw(2.4), fill: 'none' }));
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

export default LlmIcon;
