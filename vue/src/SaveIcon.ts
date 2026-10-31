import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SaveIcon = defineComponent({
  name: 'SaveIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M10 7 L 32 7 L 40 15 L 40 41 L 8 41 L 8 7 Z', fill: '#264653' }));
      children.push(h('rect', { x: '15', y: '7', width: '14', height: '11', fill: '#F4A6A4' }));
      children.push(h('rect', { x: '26', y: '9.5', width: '4', height: '6', fill: '#FAEDCD' }));
      children.push(h('rect', { x: '15', y: '25', width: '18', height: '16', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M19 31 L 29 31 M 19 35 L 26 35', stroke: '#2A2A2A', 'stroke-width': sw(2) }));
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

export default SaveIcon;
