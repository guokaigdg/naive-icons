import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const VirusIcon = defineComponent({
  name: 'VirusIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '24', cy: '24', r: '9', fill: '#E76F51' }));
      children.push(h('path', { d: 'M24 15 V9 M24 33 V39 M15 24 H9 M33 24 H39', 'stroke-width': sw(3) }));
      children.push(h('path', { d: 'M17.6 17.6 L13.5 13.5 M30.4 30.4 L34.5 34.5 M30.4 17.6 L34.5 13.5 M17.6 30.4 L13.5 34.5', 'stroke-width': sw(3) }));
      children.push(h('circle', { cx: '24', cy: '9', r: '2', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('circle', { cx: '24', cy: '39', r: '2', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('circle', { cx: '9', cy: '24', r: '2', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('circle', { cx: '39', cy: '24', r: '2', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('circle', { cx: '18', cy: '27', r: '1.8', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '29', cy: '20', r: '1.8', fill: '#FAEDCD', stroke: 'none' }));
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

export default VirusIcon;
