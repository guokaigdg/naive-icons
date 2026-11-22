import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CodeReviewIcon = defineComponent({
  name: 'CodeReviewIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '7', y: '9', width: '34', height: '30', rx: '4', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M13 17 H27 M13 23 H22 M13 29 H25', 'stroke-width': sw(2.2), fill: 'none' }));
      children.push(h('circle', { cx: '34', cy: '30', r: '6', fill: '#2A9D8F' }));
      children.push(h('path', { d: 'M31 30 L33.5 32.5 L38 27.5', stroke: '#FFFFFF', 'stroke-width': sw(2.4), fill: 'none' }));
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

export default CodeReviewIcon;
