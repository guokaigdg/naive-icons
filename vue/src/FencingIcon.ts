import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FencingIcon = defineComponent({
  name: 'FencingIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M16 32 L38 10', stroke: '#2A2A2A', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M32 32 L10 10', stroke: '#2A2A2A', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('circle', { cx: '14', cy: '34', r: '4.5', fill: '#E9C46A' }));
      children.push(h('circle', { cx: '34', cy: '34', r: '4.5', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M10.5 37.5 L7.5 40.5', stroke: '#2A2A2A', fill: 'none' }));
      children.push(h('path', { d: 'M37.5 37.5 L40.5 40.5', stroke: '#2A2A2A', fill: 'none' }));
      children.push(h('circle', { cx: '7', cy: '41', r: '2.2', fill: '#264653', stroke: 'none' }));
      children.push(h('circle', { cx: '41', cy: '41', r: '2.2', fill: '#264653', stroke: 'none' }));
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

export default FencingIcon;
