import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SignalIcon = defineComponent({
  name: 'SignalIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '6', y: '9', width: '18', height: '30', rx: '4', fill: '#264653' }));
      children.push(h('rect', { x: '9', y: '13', width: '12', height: '18', rx: '1', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '15', cy: '35', r: '1.7', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('path', { d: 'M28 14 A 12 12 0 0 1 28 34', stroke: '#E76F51', 'stroke-width': sw(3.5), fill: 'none' }));
      children.push(h('path', { d: 'M34 8 A 20 20 0 0 1 34 40', stroke: '#E76F51', 'stroke-width': sw(3.5), fill: 'none' }));
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

export default SignalIcon;
