import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PartyIcon = defineComponent({
  name: 'PartyIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M24 6 L33 18 L15 18 Z', fill: '#E76F51' }));
      children.push(h('circle', { cx: '24', cy: '28', r: '12', fill: '#E9C46A' }));
      children.push(h('circle', { cx: '20', cy: '27', r: '1.8', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('circle', { cx: '28', cy: '27', r: '1.8', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('path', { d: 'M20 32 C22 35 26 35 28 32', stroke: '#2A2A2A', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('circle', { cx: '9', cy: '20', r: '1.5', fill: '#2A9D8F', stroke: 'none' }));
      children.push(h('circle', { cx: '39', cy: '16', r: '1.5', fill: '#E76F51', stroke: 'none' }));
      children.push(h('circle', { cx: '38', cy: '28', r: '1.5', fill: '#2A9D8F', stroke: 'none' }));
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

export default PartyIcon;
