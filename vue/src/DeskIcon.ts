import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const DeskIcon = defineComponent({
  name: 'DeskIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '5', y: '19', width: '38', height: '6', rx: '2', fill: '#8B5E3C' }));
      children.push(h('path', { d: 'M10 25 L10 41 M38 25 L38 41', stroke: '#8B5E3C', 'stroke-width': sw(3.5), fill: 'none' }));
      children.push(h('rect', { x: '26', y: '28', width: '12', height: '9', rx: '2', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M30 32 L34 32', stroke: '#264653', 'stroke-width': sw(2), fill: 'none' }));
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

export default DeskIcon;
