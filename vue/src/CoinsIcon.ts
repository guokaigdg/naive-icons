import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CoinsIcon = defineComponent({
  name: 'CoinsIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '18', cy: '19', r: '9', fill: '#FAEDCD' }));
      children.push(h('circle', { cx: '31', cy: '30', r: '9', fill: '#E9C46A' }));
      children.push(h('circle', { cx: '18', cy: '19', r: '4.5', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('path', { d: 'M31 25 V35 M34 27.5 C 34 25.5 28 25.5 28 28 C 28 30.5 34 30.5 34 33 C 34 35 28 35 28 33', stroke: '#8B5E3C', 'stroke-width': sw(1.8), fill: 'none' }));
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

export default CoinsIcon;
