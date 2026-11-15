import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FolderLockIcon = defineComponent({
  name: 'FolderLockIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M6 16 L6 38 L42 38 L42 18 L22 18 L18 12 L6 12 Z', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M6 18 L42 18', stroke: '#2A2A2A', 'stroke-width': sw(2) }));
      children.push(h('rect', { x: '17', y: '24', width: '14', height: '12', rx: '2', fill: '#E76F51' }));
      children.push(h('path', { d: 'M20 24 L20 21 C20 17 28 17 28 21 L28 24', fill: 'none', stroke: '#264653', 'stroke-width': sw(2.5) }));
      children.push(h('circle', { cx: '24', cy: '30', r: '1.8', fill: '#FAEDCD', stroke: 'none' }));
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

export default FolderLockIcon;
