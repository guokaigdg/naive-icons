import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ScrewIcon = defineComponent({
  name: 'ScrewIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '19.5', y: '15', width: '9', height: '18', fill: '#264653' }));
      children.push(h('path', { d: 'M19.5 19 H16 M28.5 19 H32 M19.5 24 H16 M28.5 24 H32 M19.5 29 H16 M28.5 29 H32', stroke: '#264653', 'stroke-width': sw(2.4), fill: 'none' }));
      children.push(h('path', { d: 'M19.5 33 H28.5 L24 41 Z', fill: '#264653' }));
      children.push(h('rect', { x: '13.5', y: '5.5', width: '21', height: '8', rx: '3', fill: '#E76F51' }));
      children.push(h('path', { d: 'M17.5 9.5 H30.5', stroke: '#264653', 'stroke-width': sw(2.4), fill: 'none' }));
      children.push(h('path', { d: 'M24 6.5 V12.5', stroke: '#264653', 'stroke-width': sw(2.4), fill: 'none' }));
      children.push(h('path', { d: 'M22.8 17 V31', stroke: '#FAEDCD', 'stroke-width': sw(1.6), fill: 'none' }));
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

export default ScrewIcon;
