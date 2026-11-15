import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FloristIcon = defineComponent({
  name: 'FloristIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '9', y: '18', width: '30', height: '23', rx: '2', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M24 18 L24 15', stroke: '#588157', 'stroke-width': sw(2.6), fill: 'none' }));
      children.push(h('path', { d: 'M17 16 C 17 9 21 5.5 24 9 C 27 5.5 31 9 31 16 Z', fill: '#F4A6A4' }));
      children.push(h('rect', { x: '12', y: '23', width: '11', height: '9', fill: '#264653' }));
      children.push(h('circle', { cx: '15.5', cy: '27.5', r: '1.8', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('circle', { cx: '20', cy: '27.5', r: '1.8', fill: '#F4A6A4', stroke: 'none' }));
      children.push(h('rect', { x: '28', y: '27', width: '8', height: '14', fill: '#2A9D8F' }));
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

export default FloristIcon;
