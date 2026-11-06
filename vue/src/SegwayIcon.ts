import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SegwayIcon = defineComponent({
  name: 'SegwayIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '14', cy: '36', r: '5', fill: '#264653' }));
      children.push(h('circle', { cx: '34', cy: '36', r: '5', fill: '#264653' }));
      children.push(h('rect', { x: '11', y: '31', width: '26', height: '4', rx: '2', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M34 31 L34 18 L26 15', stroke: '#2A2A2A', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M26 15 L32 15', stroke: '#2A2A2A', 'stroke-width': sw(3.5), fill: 'none' }));
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

export default SegwayIcon;
