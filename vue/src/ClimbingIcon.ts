import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ClimbingIcon = defineComponent({
  name: 'ClimbingIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M43 6 L43 43 L26 43 L29.5 37 L26.5 31 L30 25 L26.5 19 L29.5 13 L26.5 7.5 Z', fill: '#8B5E3C' }));
      children.push(h('circle', { cx: '21', cy: '14', r: '3.6', fill: '#E76F51' }));
      children.push(h('path', { d: 'M20.5 19 L18.5 27', 'stroke-width': sw(3.5), fill: 'none' }));
      children.push(h('path', { d: 'M20.5 20 L26.5 16', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M20.5 22.5 L26.5 24', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M18.5 27 L25.5 30', 'stroke-width': sw(3.5), fill: 'none' }));
      children.push(h('path', { d: 'M18.5 27 L15.5 34 L17 39', 'stroke-width': sw(3.5), fill: 'none' }));
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

export default ClimbingIcon;
