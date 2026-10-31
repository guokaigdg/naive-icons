import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const DownloadIcon = defineComponent({
  name: 'DownloadIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M24 8.64 L24 31.68', stroke: '#2A2A2A', 'stroke-width': sw(4) }));
      children.push(h('path', { d: 'M14.4 24 L24 33.6 L33.6 24', fill: '#2A9D8F' }));
      children.push(h('rect', { x: '8.64', y: '37.44', width: '30.72', height: '5.76', rx: '1.92', fill: '#E76F51' }));
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

export default DownloadIcon;
