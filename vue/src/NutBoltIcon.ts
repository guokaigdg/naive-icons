import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const NutBoltIcon = defineComponent({
  name: 'NutBoltIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M35.4 12.6 L 16.2 31.8', stroke: '#E9C46A', 'stroke-width': sw(5.2), fill: 'none' }));
      children.push(h('path', { d: 'M35.8 9.6 L 42.4 13.4 L 42.4 21 L 35.8 24.8 L 29.2 21 L 29.2 13.4 Z', fill: '#E9C46A' }));
      children.push(h('circle', { cx: '35.8', cy: '17.2', r: '2.4', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('path', { d: 'M18.4 29.6 L 22.2 25.8 M 16.2 27.4 L 19.4 24.2 M 20.6 31.8 L 24.4 28', stroke: '#2A2A2A', 'stroke-width': sw(1.4), fill: 'none' }));
      children.push(h('path', { d: 'M18.4 15.6 L 30.4 22.4 L 30.4 36 L 18.4 42.8 L 6.4 36 L 6.4 22.4 Z', fill: '#264653' }));
      children.push(h('circle', { cx: '18.4', cy: '29.2', r: '4.6', fill: '#FAEDCD', stroke: 'none' }));
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

export default NutBoltIcon;
