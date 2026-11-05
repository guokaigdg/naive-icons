import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const HearingAidIcon = defineComponent({
  name: 'HearingAidIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M22 10 C16 10 14 16 16 20 L18 26', stroke: '#264653', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('circle', { cx: '18', cy: '29', r: '4', fill: '#E76F51' }));
      children.push(h('rect', { x: '24', y: '10', width: '12', height: '18', rx: '4', fill: '#264653' }));
      children.push(h('circle', { cx: '30', cy: '16', r: '2', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('path', { d: 'M26 24 L34 24', stroke: '#E9C46A', 'stroke-width': sw(2), fill: 'none' }));
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

export default HearingAidIcon;
