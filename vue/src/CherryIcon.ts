import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CherryIcon = defineComponent({
  name: 'CherryIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M15 27 C 15 17 22 11 29 7', stroke: '#8B5E3C', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('path', { d: 'M33 29 C 33 20 32 12 29 7', stroke: '#8B5E3C', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('ellipse', { cx: '27', cy: '7', rx: '5', ry: '2.5', transform: 'rotate(-15 27 7)', fill: '#588157' }));
      children.push(h('circle', { cx: '14', cy: '33', r: '8', fill: '#E76F51' }));
      children.push(h('circle', { cx: '33', cy: '35', r: '8', fill: '#E76F51' }));
      children.push(h('circle', { cx: '11', cy: '30', r: '1.8', fill: '#FFFFFF' }));
      children.push(h('circle', { cx: '30', cy: '32', r: '1.8', fill: '#FFFFFF' }));
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

export default CherryIcon;
