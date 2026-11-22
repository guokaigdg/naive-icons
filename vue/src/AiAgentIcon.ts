import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const AiAgentIcon = defineComponent({
  name: 'AiAgentIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '10', y: '12', width: '28', height: '24', rx: '6', fill: '#264653' }));
      children.push(h('path', { d: 'M24 12 V7', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('circle', { cx: '24', cy: '6', r: '2.6', fill: '#E76F51', stroke: 'none' }));
      children.push(h('circle', { cx: '18', cy: '22', r: '3', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '30', cy: '22', r: '3', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('path', { d: 'M19 29 Q24 32.5 29 29', stroke: '#FAEDCD', 'stroke-width': sw(2.5), fill: 'none' }));
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

export default AiAgentIcon;
