import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SaltShakerIcon = defineComponent({
  name: 'SaltShakerIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M15 20 C 15 17.5 33 17.5 33 20 L34 37 C 34 40 14 40 14 37 Z', fill: '#FAEDCD' }));
      children.push(h('rect', { x: '14.5', y: '12', width: '19', height: '8', rx: '3', fill: '#264653' }));
      children.push(h('circle', { cx: '20', cy: '15.5', r: '1.3', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '24', cy: '14.8', r: '1.3', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '28', cy: '15.5', r: '1.3', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('path', { d: 'M16.5 24 L31.5 24 M17.5 30 L30.5 30', stroke: '#FFFFFF', 'stroke-width': sw(2) }));
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

export default SaltShakerIcon;
