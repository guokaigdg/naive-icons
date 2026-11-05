import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const TaxIcon = defineComponent({
  name: 'TaxIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '9', y: '5', width: '30', height: '38', rx: '3', fill: '#FFFFFF' }));
      children.push(h('path', { d: 'M15 14 L33 14 M15 20 L33 20 M15 26 L28 26', stroke: '#264653', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('circle', { cx: '20', cy: '32', r: '3', fill: '#E76F51', stroke: 'none' }));
      children.push(h('circle', { cx: '30', cy: '38', r: '3', fill: '#E76F51', stroke: 'none' }));
      children.push(h('path', { d: 'M32 31 L18 40', stroke: '#E76F51', 'stroke-width': sw(3), fill: 'none' }));
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

export default TaxIcon;
