import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PiggyBankIcon = defineComponent({
  name: 'PiggyBankIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('ellipse', { cx: '23', cy: '27', rx: '14', ry: '10', fill: '#F4A6A4' }));
      children.push(h('path', { d: 'M14 18 L13 10 L21 15 Z', fill: '#F4A6A4' }));
      children.push(h('ellipse', { cx: '35', cy: '27', rx: '4', ry: '3', fill: '#F4A6A4' }));
      children.push(h('circle', { cx: '34', cy: '26', r: '1', fill: '#264653', stroke: 'none' }));
      children.push(h('circle', { cx: '36.5', cy: '26', r: '1', fill: '#264653', stroke: 'none' }));
      children.push(h('path', { d: 'M20 18 L28 18', stroke: '#264653', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('path', { d: 'M13 36 L13 41 M21 37 L21 41 M28 37 L28 41', stroke: '#F4A6A4', 'stroke-width': sw(3.5), fill: 'none' }));
      children.push(h('path', { d: 'M9 23 C5 22 5 18 8 17', stroke: '#F4A6A4', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('circle', { cx: '30', cy: '23', r: '1.6', fill: '#2A2A2A', stroke: 'none' }));
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

export default PiggyBankIcon;
