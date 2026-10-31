import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const TvIcon = defineComponent({
  name: 'TvIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M16 13 L32 13', stroke: '#2A2A2A', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M24 13 L17 6', stroke: '#2A2A2A', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M24 13 L31 6', stroke: '#2A2A2A', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('rect', { x: '8', y: '13', width: '32', height: '24', rx: '4', fill: '#E76F51' }));
      children.push(h('rect', { x: '13', y: '18', width: '22', height: '14', rx: '2', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M17 37 L15 42', stroke: '#2A2A2A', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M31 37 L33 42', stroke: '#2A2A2A', 'stroke-width': sw(3), fill: 'none' }));
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

export default TvIcon;
