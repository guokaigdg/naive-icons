import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ClampIcon = defineComponent({
  name: 'ClampIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M10 10 L10 38', stroke: '#264653', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M10 10 L26 10 L26 17 M10 38 L26 38 L26 31', stroke: '#264653', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('circle', { cx: '17', cy: '24', r: '4', fill: '#E76F51' }));
      children.push(h('path', { d: 'M22 24 L30 24', stroke: '#2A2A2A', 'stroke-width': sw(2.5), fill: 'none' }));
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

export default ClampIcon;
