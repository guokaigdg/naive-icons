import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ZoomOutIcon = defineComponent({
  name: 'ZoomOutIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '20', cy: '20', r: '12.5', fill: 'none', stroke: '#2A9D8F', 'stroke-width': sw(4) }));
      children.push(h('path', { d: 'M29.5 29.5 L40 40', stroke: '#2A2A2A', 'stroke-width': sw(4.5) }));
      children.push(h('path', { d: 'M15 20 L25 20', stroke: '#E76F51', 'stroke-width': sw(4) }));
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

export default ZoomOutIcon;
