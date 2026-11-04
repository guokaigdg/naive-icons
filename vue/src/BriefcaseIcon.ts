import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BriefcaseIcon = defineComponent({
  name: 'BriefcaseIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '6', y: '16', width: '36', height: '24', rx: '4', fill: '#264653' }));
      children.push(h('path', { d: 'M18 16 L18 12 A 3 3 0 0 1 21 9 L27 9 A 3 3 0 0 1 30 12 L30 16', fill: 'none', stroke: '#2A2A2A', 'stroke-width': sw(3.5) }));
      children.push(h('rect', { x: '19', y: '24', width: '10', height: '7', rx: '2', fill: '#E9C46A', stroke: 'none' }));
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

export default BriefcaseIcon;
