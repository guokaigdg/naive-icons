import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PassportIcon = defineComponent({
  name: 'PassportIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '12', y: '6', width: '24', height: '36', rx: '3', fill: '#264653' }));
      children.push(h('circle', { cx: '24', cy: '19', r: '6', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('path', { d: 'M18 19 H30', stroke: '#264653', 'stroke-width': sw(1.5), fill: 'none' }));
      children.push(h('path', { d: 'M24 13 C21.5 16 21.5 22 24 25 C26.5 22 26.5 16 24 13', stroke: '#264653', 'stroke-width': sw(1.5), fill: 'none' }));
      children.push(h('path', { d: 'M18 32 H30', stroke: '#E9C46A', 'stroke-width': sw(2), fill: 'none' }));
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

export default PassportIcon;
