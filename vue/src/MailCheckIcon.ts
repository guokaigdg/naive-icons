import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MailCheckIcon = defineComponent({
  name: 'MailCheckIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '6', y: '13', width: '36', height: '24', rx: '3', fill: '#F4A6A4' }));
      children.push(h('path', { d: 'M8 15 L24 28 L40 15', stroke: '#2A2A2A', fill: 'none' }));
      children.push(h('circle', { cx: '37', cy: '11', r: '5.5', fill: '#588157' }));
      children.push(h('path', { d: 'M34 11 L36 13 L40 8', stroke: '#FFFFFF', 'stroke-width': sw(2), fill: 'none' }));
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

export default MailCheckIcon;
