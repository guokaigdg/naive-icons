import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const StadiumIcon = defineComponent({
  name: 'StadiumIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('ellipse', { cx: '24', cy: '29', rx: '18', ry: '11', fill: '#FAEDCD' }));
      children.push(h('ellipse', { cx: '24', cy: '29', rx: '10', ry: '5', fill: '#588157', stroke: 'none' }));
      children.push(h('path', { d: 'M8 18 L8 26 M40 18 L40 26', stroke: '#264653', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M6 18 L42 18', stroke: '#264653', 'stroke-width': sw(2.5), fill: 'none' }));
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

export default StadiumIcon;
