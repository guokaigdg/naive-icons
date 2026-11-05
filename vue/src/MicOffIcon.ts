import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MicOffIcon = defineComponent({
  name: 'MicOffIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '17', y: '6', width: '14', height: '22', rx: '7', fill: '#264653' }));
      children.push(h('path', { d: 'M10 22 L10 26 C10 34 18 38 24 38 C30 38 38 34 38 26 L38 22', fill: 'none', stroke: '#2A2A2A' }));
      children.push(h('path', { d: 'M24 38 L24 42', stroke: '#2A2A2A' }));
      children.push(h('path', { d: 'M10 10 L38 40', stroke: '#E76F51', 'stroke-width': sw(4), fill: 'none' }));
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

export default MicOffIcon;
