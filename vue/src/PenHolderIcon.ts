import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PenHolderIcon = defineComponent({
  name: 'PenHolderIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M12 20 L36 20 L34 41 L14 41 Z', fill: '#264653' }));
      children.push(h('path', { d: 'M17 20 L15 9 M24 20 L24 6 M31 20 L33 10', stroke: '#E9C46A', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('circle', { cx: '15', cy: '9', r: '2', fill: '#E76F51', stroke: 'none' }));
      children.push(h('circle', { cx: '24', cy: '6', r: '2', fill: '#2A9D8F', stroke: 'none' }));
      children.push(h('circle', { cx: '33', cy: '10', r: '2', fill: '#F4A6A4', stroke: 'none' }));
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

export default PenHolderIcon;
