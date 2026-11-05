import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MailQuestionIcon = defineComponent({
  name: 'MailQuestionIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '6', y: '11', width: '36', height: '23', rx: '3', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M6 14 L24 26 L42 14', stroke: '#264653', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('circle', { cx: '35', cy: '34', r: '5.5', fill: '#E76F51' }));
      children.push(h('path', { d: 'M33 32.5 C33 30.5 37 30.5 37 32.5 C37 34 35 34 35 35', stroke: '#FAEDCD', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('circle', { cx: '35', cy: '37', r: '1.2', fill: '#FAEDCD', stroke: 'none' }));
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

export default MailQuestionIcon;
