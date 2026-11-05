import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const RunningIcon = defineComponent({
  name: 'RunningIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '31', cy: '10', r: '4', fill: '#E76F51' }));
      children.push(h('path', { d: 'M28 15 L24 24 L18 30', 'stroke-width': sw(3.5), fill: 'none' }));
      children.push(h('path', { d: 'M28 16 L34 22', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M24 24 L30 32 L34 39', 'stroke-width': sw(3.5), fill: 'none' }));
      children.push(h('path', { d: 'M24 24 L18 34 L12 38', 'stroke-width': sw(3.5), fill: 'none' }));
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

export default RunningIcon;
