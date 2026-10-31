import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ClipboardIcon = defineComponent({
  name: 'ClipboardIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '10', y: '10', width: '28', height: '32', rx: '4', fill: '#FAEDCD' }));
      children.push(h('rect', { x: '18', y: '6', width: '12', height: '8', rx: '3', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M18 24 L30 24', stroke: '#2A2A2A', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('path', { d: 'M18 32 L26 32', stroke: '#2A2A2A', 'stroke-width': sw(2.5), fill: 'none' }));
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

export default ClipboardIcon;
