import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const LinkIcon = defineComponent({
  name: 'LinkIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(
        h('g', { transform: 'rotate(45 24 24)' }, [
          h('rect', { x: '9', y: '17', width: '16', height: '14', rx: '7', fill: 'none', stroke: '#2A2A2A', 'stroke-width': sw(3.5) }),
          h('rect', { x: '23', y: '17', width: '16', height: '14', rx: '7', fill: 'none', stroke: '#2A2A2A', 'stroke-width': sw(3.5) }),
        ]),
      );
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

export default LinkIcon;
