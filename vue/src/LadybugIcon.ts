import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const LadybugIcon = defineComponent({
  name: 'LadybugIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M16 17 C 16 9 32 9 32 17 Z', fill: '#2A2A2A' }));
      children.push(h('circle', { cx: '24', cy: '27', r: '14', fill: '#E76F51' }));
      children.push(h('path', { d: 'M24 15 L24 41', stroke: '#2A2A2A', 'stroke-width': sw(2.5) }));
      children.push(h('circle', { cx: '17', cy: '23', r: '2.5', fill: '#2A2A2A' }));
      children.push(h('circle', { cx: '31', cy: '23', r: '2.5', fill: '#2A2A2A' }));
      children.push(h('circle', { cx: '15', cy: '32', r: '2', fill: '#2A2A2A' }));
      children.push(h('circle', { cx: '33', cy: '32', r: '2', fill: '#2A2A2A' }));
      children.push(h('path', { d: 'M18 10 C 16 6 13 5 11 6', stroke: '#2A2A2A', fill: 'none', 'stroke-width': sw(1.8) }));
      children.push(h('path', { d: 'M30 10 C 32 6 35 5 37 6', stroke: '#2A2A2A', fill: 'none', 'stroke-width': sw(1.8) }));
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

export default LadybugIcon;
