import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SpaceHeaterIcon = defineComponent({
  name: 'SpaceHeaterIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '10', y: '9', width: '28', height: '29', rx: '6', fill: '#264653' }));
      children.push(h('path', { d: 'M15 16 H33 M15 22 H33 M15 28 H33', stroke: '#E76F51', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M16 38 V42 M32 38 V42', stroke: '#264653', 'stroke-width': sw(3.5), fill: 'none' }));
      children.push(h('path', { d: 'M13.5 14 V20', stroke: '#FAEDCD', 'stroke-width': sw(2), fill: 'none' }));
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

export default SpaceHeaterIcon;
