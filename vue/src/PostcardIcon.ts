import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PostcardIcon = defineComponent({
  name: 'PostcardIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '7', y: '13', width: '34', height: '24', rx: '3', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M22 17 L22 37', stroke: '#264653', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('rect', { x: '28', y: '16', width: '9', height: '7', fill: '#E76F51' }));
      children.push(h('path', { d: 'M13 21 L19 21 M13 26 L19 26 M13 31 L17 31', stroke: '#2A2A2A', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('path', { d: 'M27 25 L37 25 M27 30 L35 30', stroke: '#2A2A2A', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('path', { d: 'M25 19 C27 18 29 20 31 19 C33 18 35 20 37 19', stroke: '#264653', 'stroke-width': sw(1.5), fill: 'none' }));
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

export default PostcardIcon;
