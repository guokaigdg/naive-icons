import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CopyIcon = defineComponent({
  name: 'CopyIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '14', y: '13', width: '20', height: '22', rx: '3', fill: '#FAEDCD', stroke: '#2A2A2A', 'stroke-width': sw(3.5) }));
      children.push(h('rect', { x: '10', y: '9', width: '20', height: '22', rx: '3', fill: '#FFFFFF', stroke: '#2A2A2A', 'stroke-width': sw(3.5) }));
      children.push(h('line', { x1: '15', y1: '16', x2: '25', y2: '16', stroke: '#2A2A2A', 'stroke-width': sw(3.5) }));
      children.push(h('line', { x1: '15', y1: '22', x2: '25', y2: '22', stroke: '#2A2A2A', 'stroke-width': sw(3.5) }));
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

export default CopyIcon;
