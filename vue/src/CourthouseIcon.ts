import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CourthouseIcon = defineComponent({
  name: 'CourthouseIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M5 19 L24 8 L43 19 Z', fill: '#E76F51' }));
      children.push(h('rect', { x: '7', y: '19', width: '34', height: '19', fill: '#FFFFFF' }));
      children.push(h('path', { d: 'M12 24 L12 36 M36 24 L36 36', stroke: '#264653', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M19 38 L19 30 C19 26 29 26 29 30 L29 38', fill: '#264653', stroke: 'none' }));
      children.push(h('path', { d: 'M7 38 L41 38', stroke: '#264653', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M11 41 L37 41', stroke: '#264653', 'stroke-width': sw(2.5), fill: 'none' }));
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

export default CourthouseIcon;
