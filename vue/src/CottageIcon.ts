import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CottageIcon = defineComponent({
  name: 'CottageIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '30', y: '13', width: '6', height: '10', fill: '#8B5E3C' }));
      children.push(h('rect', { x: '10', y: '24', width: '28', height: '17', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M7 24 L24 11 L41 24 Z', fill: '#E76F51' }));
      children.push(h('circle', { cx: '24', cy: '28', r: '4', fill: '#264653' }));
      children.push(h('path', { d: 'M24 24.6 L24 31.4 M20.6 28 L27.4 28', stroke: '#FAEDCD', 'stroke-width': sw(1.6), fill: 'none' }));
      children.push(h('rect', { x: '17', y: '31', width: '7', height: '10', fill: '#8B5E3C' }));
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

export default CottageIcon;
