import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const NoDataIcon = defineComponent({
  name: 'NoDataIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M8 13 L8 39 L40 39 L40 13 Z', fill: '#8B5E3C', stroke: 'none' }));
      children.push(h('path', { d: 'M11 13 L37 13 L33 22 L15 22 Z', fill: '#264653', stroke: '#2A2A2A', 'stroke-width': sw(3), 'stroke-linejoin': 'round' }));
      children.push(h('path', { d: 'M8 13 L8 39 L40 39 L40 13', stroke: '#2A2A2A', 'stroke-width': sw(3.5), fill: 'none' }));
      children.push(h('rect', { x: '14', y: '26', width: '20', height: '10', rx: '2', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '20', cy: '31', r: '1.6', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('circle', { cx: '28', cy: '31', r: '1.6', fill: '#2A2A2A', stroke: 'none' }));
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

export default NoDataIcon;
