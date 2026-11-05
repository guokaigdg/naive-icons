import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const CottonSwabIcon = defineComponent({
  name: 'CottonSwabIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '14', y: '22', width: '20', height: '4', rx: '2', fill: '#8B5E3C' }));
      children.push(h('ellipse', { cx: '11', cy: '24', rx: '4', ry: '6', fill: '#FFFFFF' }));
      children.push(h('ellipse', { cx: '37', cy: '24', rx: '4', ry: '6', fill: '#FFFFFF' }));
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

export default CottonSwabIcon;
