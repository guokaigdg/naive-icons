import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const AbacusIcon = defineComponent({
  name: 'AbacusIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '5', y: '9', width: '38', height: '30', rx: '2.5', fill: '#8B5E3C' }));
      children.push(h('rect', { x: '9', y: '13', width: '30', height: '22', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('path', { d: 'M15 13 V35 M24 13 V35 M33 13 V35', stroke: '#8B5E3C', 'stroke-width': sw(1.8), fill: 'none' }));
      children.push(h('path', { d: 'M9 22 H39', stroke: '#8B5E3C', 'stroke-width': sw(2.6), fill: 'none' }));
      children.push(h('circle', { cx: '15', cy: '17', r: '3', fill: '#E76F51', stroke: 'none' }));
      children.push(h('circle', { cx: '24', cy: '17', r: '3', fill: '#2A9D8F', stroke: 'none' }));
      children.push(h('circle', { cx: '33', cy: '17', r: '3', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('circle', { cx: '15', cy: '28', r: '3', fill: '#E76F51', stroke: 'none' }));
      children.push(h('circle', { cx: '24', cy: '28', r: '3', fill: '#2A9D8F', stroke: 'none' }));
      children.push(h('circle', { cx: '33', cy: '28', r: '3', fill: '#E9C46A', stroke: 'none' }));
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

export default AbacusIcon;
