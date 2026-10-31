import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const RssIcon = defineComponent({
  name: 'RssIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '12', cy: '37', r: '3.5', fill: '#E76F51', stroke: 'none' }));
      children.push(h('path', { d: 'M12 26 A11 11 0 0 1 23 37', stroke: '#E76F51', 'stroke-width': sw(4), fill: 'none' }));
      children.push(h('path', { d: 'M12 14 A23 23 0 0 1 35 37', stroke: '#E76F51', 'stroke-width': sw(4), fill: 'none' }));
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

export default RssIcon;
