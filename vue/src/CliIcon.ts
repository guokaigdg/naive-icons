import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CliIcon = defineComponent({
  name: 'CliIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '6', y: '10', width: '36', height: '28', rx: '4', fill: '#264653' }));
      children.push(h('path', { d: 'M13 19 L18 23 L13 27', stroke: '#2A9D8F', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M23 29 H34', stroke: '#FAEDCD', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('circle', { cx: '11', cy: '15', r: '1.4', fill: '#E76F51', stroke: 'none' }));
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

export default CliIcon;
