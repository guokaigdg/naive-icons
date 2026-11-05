import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MotorcycleIcon = defineComponent({
  name: 'MotorcycleIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '12', cy: '34', r: '7', fill: '#264653' }));
      children.push(h('circle', { cx: '36', cy: '34', r: '7', fill: '#264653' }));
      children.push(h('circle', { cx: '12', cy: '34', r: '2.2', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '36', cy: '34', r: '2.2', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('path', { d: 'M12 34 L18 24 L30 24 L36 34 L28 34 L24 28 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M30 22 L38 18', stroke: '#2A2A2A', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M16 22 L24 22', stroke: '#264653', 'stroke-width': sw(4), fill: 'none' }));
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

export default MotorcycleIcon;
