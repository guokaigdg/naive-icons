import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SodaIcon = defineComponent({
  name: 'SodaIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M29 8 L26 20', stroke: '#E76F51', 'stroke-width': sw(3.2) }));
      children.push(h('path', { d: 'M29 8 L26 20', stroke: '#FAEDCD', 'stroke-width': sw(1.2) }));
      children.push(h('path', { d: 'M13.5 16 L34.5 16 L32 41 L16 41 Z', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M14.6 23 L33.4 23 L32.2 38.5 L15.8 38.5 Z', fill: '#E76F51' }));
      children.push(h('rect', { x: '10.5', y: '11', width: '27', height: '6.5', rx: '3', fill: '#264653' }));
      children.push(h('circle', { cx: '20', cy: '30', r: '1.6', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '26', cy: '34', r: '1.3', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '28', cy: '27', r: '1.2', fill: '#FAEDCD', stroke: 'none' }));
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

export default SodaIcon;
