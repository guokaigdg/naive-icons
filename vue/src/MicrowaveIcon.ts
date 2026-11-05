import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MicrowaveIcon = defineComponent({
  name: 'MicrowaveIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '6', y: '14', width: '36', height: '22', rx: '3', fill: '#FFFFFF' }));
      children.push(h('rect', { x: '10', y: '18', width: '22', height: '14', rx: '2', fill: '#264653', stroke: 'none' }));
      children.push(h('circle', { cx: '36', cy: '21', r: '2', fill: '#E76F51', stroke: 'none' }));
      children.push(h('circle', { cx: '36', cy: '28', r: '2', fill: '#2A9D8F', stroke: 'none' }));
      children.push(h('path', { d: 'M14 38 L14 41 M34 38 L34 41', stroke: '#2A2A2A', 'stroke-width': sw(3), fill: 'none' }));
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

export default MicrowaveIcon;
