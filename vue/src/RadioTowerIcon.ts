import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const RadioTowerIcon = defineComponent({
  name: 'RadioTowerIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M17 43 L22 12 M31 43 L26 12', stroke: '#2A2A2A', fill: 'none' }));
      children.push(h('path', { d: 'M18.1 36 H29.9 M19.6 27 H28.4 M20.9 19 H27.1', stroke: '#2A2A2A', fill: 'none' }));
      children.push(h('path', { d: 'M18.1 36 L28.4 27 M19.6 27 L29.9 36', stroke: '#2A2A2A', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('path', { d: 'M14 43 H34', stroke: '#2A2A2A', fill: 'none' }));
      children.push(h('path', { d: 'M24 12 V8', stroke: '#2A2A2A', fill: 'none' }));
      children.push(h('circle', { cx: '24', cy: '6.5', r: '2.4', fill: '#E76F51', stroke: 'none' }));
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

export default RadioTowerIcon;
