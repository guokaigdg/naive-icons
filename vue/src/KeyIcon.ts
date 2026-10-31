import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const KeyIcon = defineComponent({
  name: 'KeyIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '14.4', cy: '24', r: '9.6', fill: '#E9C46A' }));
      children.push(h('circle', { cx: '14.4', cy: '24', r: '3.84', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M24 24 L41.28 24', stroke: '#2A2A2A', 'stroke-width': sw(4) }));
      children.push(h('path', { d: 'M29.76 24 L29.76 29.76', stroke: '#2A2A2A', 'stroke-width': sw(3) }));
      children.push(h('path', { d: 'M35.52 24 L35.52 29.76', stroke: '#2A2A2A', 'stroke-width': sw(3) }));
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

export default KeyIcon;
