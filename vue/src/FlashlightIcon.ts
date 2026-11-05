import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FlashlightIcon = defineComponent({
  name: 'FlashlightIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M18 18 L18 40 L30 40 L30 18 Z', fill: '#264653' }));
      children.push(h('path', { d: 'M14 8 L34 8 L30 18 L18 18 Z', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M10 6 L14 12 M38 6 L34 12', stroke: '#E9C46A', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('circle', { cx: '24', cy: '29', r: '2.5', fill: '#E9C46A', stroke: 'none' }));
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

export default FlashlightIcon;
