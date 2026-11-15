import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const NailIcon = defineComponent({
  name: 'NailIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '13', y: '5.5', width: '22', height: '5.5', rx: '2.5', fill: '#264653' }));
      children.push(h('rect', { x: '20.5', y: '11', width: '7', height: '21', fill: '#264653' }));
      children.push(h('path', { d: 'M20.5 32 H27.5 L24 41 Z', fill: '#264653' }));
      children.push(h('path', { d: 'M16.5 8.2 H26', stroke: '#FAEDCD', 'stroke-width': sw(1.8), fill: 'none' }));
      children.push(h('path', { d: 'M22.8 14 V30', stroke: '#FAEDCD', 'stroke-width': sw(1.6), fill: 'none' }));
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

export default NailIcon;
