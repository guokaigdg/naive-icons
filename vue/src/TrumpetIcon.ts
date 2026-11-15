import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const TrumpetIcon = defineComponent({
  name: 'TrumpetIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M30 18 L41 12 C 43 12 43 36 41 36 L30 30 Z', fill: '#E9C46A' }));
      children.push(h('rect', { x: '8', y: '21.5', width: '22', height: '5', fill: '#E9C46A' }));
      children.push(h('rect', { x: '4.6', y: '21', width: '4.4', height: '6', rx: '1.5', fill: '#264653', 'stroke-width': sw(2.4) }));
      children.push(h('rect', { x: '14', y: '13', width: '4', height: '9', rx: '1.5', fill: '#E76F51', 'stroke-width': sw(2.2) }));
      children.push(h('rect', { x: '20', y: '13', width: '4', height: '9', rx: '1.5', fill: '#E76F51', 'stroke-width': sw(2.2) }));
      children.push(h('rect', { x: '26', y: '13', width: '4', height: '9', rx: '1.5', fill: '#E76F51', 'stroke-width': sw(2.2) }));
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

export default TrumpetIcon;
