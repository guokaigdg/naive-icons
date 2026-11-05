import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MuseumIcon = defineComponent({
  name: 'MuseumIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M16 20 C16 12 32 12 32 20', fill: '#E76F51' }));
      children.push(h('rect', { x: '10', y: '20', width: '28', height: '18', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M10 38 H38', 'stroke-width': sw(3) }));
      children.push(h('rect', { x: '18', y: '26', width: '12', height: '12', fill: '#264653', stroke: 'none' }));
      children.push(h('path', { d: 'M13 22 V34 M35 22 V34', 'stroke-width': sw(2), fill: 'none' }));
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

export default MuseumIcon;
