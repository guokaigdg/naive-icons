import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BlenderIcon = defineComponent({
  name: 'BlenderIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M15 8 L33 8 L31 28 L17 28 Z', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M15 14 L33 14', stroke: '#264653', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('rect', { x: '13', y: '28', width: '22', height: '9', rx: '3', fill: '#2A9D8F' }));
      children.push(h('circle', { cx: '24', cy: '32', r: '2.5', fill: '#E76F51', stroke: 'none' }));
      children.push(h('path', { d: 'M19 37 L19 41 M29 37 L29 41', stroke: '#2A2A2A', 'stroke-width': sw(2.5), fill: 'none' }));
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

export default BlenderIcon;
