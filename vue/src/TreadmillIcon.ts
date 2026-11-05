import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const TreadmillIcon = defineComponent({
  name: 'TreadmillIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M8 30 H32 L40 38 H12 Z', fill: '#264653' }));
      children.push(h('path', { d: 'M32 30 V10 H38 V28', fill: 'none', 'stroke-width': sw(3) }));
      children.push(h('rect', { x: '34', y: '8', width: '8', height: '6', rx: '2', fill: '#E76F51' }));
      children.push(h('path', { d: 'M12 42 H36', 'stroke-width': sw(3) }));
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

export default TreadmillIcon;
