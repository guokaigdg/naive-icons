import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ServerIcon = defineComponent({
  name: 'ServerIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '8', y: '9', width: '32', height: '12', rx: '3', fill: '#264653' }));
      children.push(h('rect', { x: '8', y: '24', width: '32', height: '12', rx: '3', fill: '#2A9D8F' }));
      children.push(h('circle', { cx: '14', cy: '15', r: '1.8', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('circle', { cx: '14', cy: '30', r: '1.8', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('path', { d: 'M21 15 L36 15', stroke: '#FFFFFF', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('path', { d: 'M21 30 L30 30', stroke: '#FFFFFF', 'stroke-width': sw(2), fill: 'none' }));
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

export default ServerIcon;
