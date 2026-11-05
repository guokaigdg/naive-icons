import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MailLockIcon = defineComponent({
  name: 'MailLockIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '6', y: '11', width: '36', height: '23', rx: '3', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M6 14 L24 26 L42 14', stroke: '#264653', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('rect', { x: '29', y: '29', width: '12', height: '10', rx: '2', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M32 29 L32 25 C32 21 38 21 38 25 L38 29', stroke: '#264653', 'stroke-width': sw(2.5), fill: 'none' }));
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

export default MailLockIcon;
