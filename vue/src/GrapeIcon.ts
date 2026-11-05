import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const GrapeIcon = defineComponent({
  name: 'GrapeIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M24 16 L24 10 C 24 7 29 6 32 9', stroke: '#8B5E3C', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M25 12 C 30 6 37 8 36 13 C 31 15 27 14 25 12 Z', fill: '#588157' }));
      children.push(h('circle', { cx: '18', cy: '19', r: '4.2', fill: '#264653' }));
      children.push(h('circle', { cx: '24', cy: '17', r: '4.2', fill: '#264653' }));
      children.push(h('circle', { cx: '30', cy: '19', r: '4.2', fill: '#264653' }));
      children.push(h('circle', { cx: '21', cy: '25', r: '4.2', fill: '#264653' }));
      children.push(h('circle', { cx: '27', cy: '25', r: '4.2', fill: '#264653' }));
      children.push(h('circle', { cx: '24', cy: '31', r: '4.2', fill: '#264653' }));
      children.push(h('path', { d: 'M17 17 C 18 15 19 15 20 16', stroke: '#FAEDCD', 'stroke-width': sw(2), fill: 'none' }));
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

export default GrapeIcon;
