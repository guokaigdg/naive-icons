import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const UfoIcon = defineComponent({
  name: 'UfoIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('ellipse', { cx: '24', cy: '25', rx: '16', ry: '5.5', fill: '#264653' }));
      children.push(h('path', { d: 'M16.5 21.5 C 16.5 14 31.5 14 31.5 21.5 Z', fill: '#2A9D8F' }));
      children.push(h('circle', { cx: '13', cy: '26', r: '1.7', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('circle', { cx: '24', cy: '27.5', r: '1.7', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('circle', { cx: '35', cy: '26', r: '1.7', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('path', { d: 'M24 15 L24 11.5', stroke: '#2A2A2A', 'stroke-width': sw(2.4), fill: 'none' }));
      children.push(h('circle', { cx: '24', cy: '10.5', r: '1.5', fill: '#E9C46A', stroke: 'none' }));
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

export default UfoIcon;
