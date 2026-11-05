import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SoapIcon = defineComponent({
  name: 'SoapIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '7', y: '24', width: '34', height: '15', rx: '6', fill: '#F4A6A4' }));
      children.push(h('circle', { cx: '17', cy: '15', r: '4', fill: '#FAEDCD' }));
      children.push(h('circle', { cx: '26', cy: '10', r: '3', fill: '#FAEDCD' }));
      children.push(h('circle', { cx: '34', cy: '15', r: '2.5', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M14 31 L34 31', stroke: '#FFFFFF', 'stroke-width': sw(2), fill: 'none' }));
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

export default SoapIcon;
