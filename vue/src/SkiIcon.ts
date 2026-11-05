import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SkiIcon = defineComponent({
  name: 'SkiIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M8 32 L30 8', stroke: '#264653', 'stroke-width': sw(4), fill: 'none' }));
      children.push(h('path', { d: 'M16 38 L40 12', stroke: '#264653', 'stroke-width': sw(4), fill: 'none' }));
      children.push(h('path', { d: 'M14 18 L20 38', stroke: '#E76F51', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('path', { d: 'M34 18 L28 38', stroke: '#E76F51', 'stroke-width': sw(2.5), fill: 'none' }));
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

export default SkiIcon;
