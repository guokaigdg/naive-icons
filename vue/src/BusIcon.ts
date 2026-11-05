import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BusIcon = defineComponent({
  name: 'BusIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '8', y: '8', width: '32', height: '28', rx: '5', fill: '#E76F51' }));
      children.push(h('rect', { x: '12', y: '13', width: '24', height: '10', rx: '2', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('path', { d: 'M12 27 L36 27', stroke: '#264653', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('circle', { cx: '16', cy: '38', r: '4', fill: '#264653' }));
      children.push(h('circle', { cx: '32', cy: '38', r: '4', fill: '#264653' }));
      children.push(h('circle', { cx: '16', cy: '38', r: '1.4', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '32', cy: '38', r: '1.4', fill: '#FAEDCD', stroke: 'none' }));
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

export default BusIcon;
