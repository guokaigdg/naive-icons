import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ArrowLeftCircleIcon = defineComponent({
  name: 'ArrowLeftCircleIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '24', cy: '24', r: '17', fill: 'none', stroke: '#2A2A2A', 'stroke-width': sw(3.5) }));
      children.push(h('path', { d: 'M34 24 L21 24', stroke: '#2A2A2A', 'stroke-width': sw(3.5), fill: 'none' }));
      children.push(h('path', { d: 'M12 24 L21 17.5 L21 30.5 Z', fill: '#E76F51', stroke: 'none' }));
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

export default ArrowLeftCircleIcon;
